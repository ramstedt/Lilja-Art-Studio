import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import CourseCard from '@/components/CourseCard/CourseCard';
import imageUrlBuilder from '@sanity/image-url';
import { getFileAsset } from '@sanity/asset-utils';
import CoursesWrapper from '@/components/CoursesWrapper/CoursesWrapper';
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Modal from 'react-modal';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const GalleryWrapper = styled.div`
  width: 100%;
`;

const Gallery = styled.div`
  display: grid;
  gap: 1rem;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 0.5fr));
  }
`;

const GalleryCard = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  border-color: #d8d8d8;
  overflow: hidden;
  img {
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media only screen and (min-width: 768px) {
    width: 330px;
    height: 330px;
  }
`;

const customStyles = {
  content: {
    position: 'absolute',
    zIndex: '999',
    cursor: 'pointer',
  },
};

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

function fileUrl(media) {
  return getFileAsset(media.asset, {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  }).url;
}

function GalleryModal({ media, altText }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <GalleryCard>
        {media._type === 'image' ? (
          <Image
            src={urlFor(media).url()} // Use urlFor for images
            alt={altText}
            fill
            style={{ objectFit: 'cover' }}
            sizes='(max-width: 600px)'
            onClick={openModal}
          />
        ) : (
          <video autoPlay muted loop onClick={openModal} className="videoThumb">
            <source src={fileUrl(media)} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        )}
      </GalleryCard>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={altText}
        style={customStyles}
      >
        {media._type === 'image' ? (
          <Image
            src={urlFor(media).url()}
            alt={altText}
            fill
            style={{ objectFit: 'none' }}
            sizes='(max-width: 80vw)'
            onClick={closeModal}
          />
        ) : (
          <video autoPlay muted loop>
            <source src={fileUrl(media)} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        )}
      </Modal>
    </div>
  );
}

export default function Courses() {
  const [coursePageData, setCoursePage] = useState(null);
  const [courseData, setCourses] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      client.fetch(`*[_type == "course"]`),
      client.fetch(`*[_type == "courses"]`),
    ])
      .then(([courseData, coursesData]) => {
        setCoursePage(coursesData);
        setCourses(courseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (isLoading) return <div></div>;

  return (
    <Layout>
      <h1>Kurser</h1>
      <BlockContent blocks={coursePageData && coursePageData[0].description} />
      <h2>Aktuella kurser</h2>
      <CoursesWrapper>
        {courseData
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((course, key) => {
            return (
              <CourseCard
                key={key}
                name={course.name}
                slug={`/kurser/${course.slug.current}`}
                image={course.image && urlFor(course.image).url()}
                alt={course.image.alt}
              />
            );
          })}
      </CoursesWrapper>

      <GalleryWrapper>
        <h2>Bilder från olika kurser</h2>
        <Gallery>
          {coursePageData[0].gallery &&
            coursePageData[0].gallery.map((media, key) => (
              <>
                <GalleryModal
                  key={`${media.alt} ${key}`}
                  media={media.image}
                  altText={media.alt}
                />
              </>
            ))}
        </Gallery>
      </GalleryWrapper>
    </Layout>
  );
}
