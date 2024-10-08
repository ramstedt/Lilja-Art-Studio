import { useRouter } from 'next/router';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import imageUrlBuilder from '@sanity/image-url';
import Layout from '@/components/Layout/Layout';
import SanityBlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';
import ClipLoader from 'react-spinners/ClipLoader';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;
  @media screen and (min-width: 768px) {
    max-width: 90%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 320px;
  position: relative;

  img {
    object-fit: scale-down;
  }
`;

const Button = styled.button`
  width: fit-content;
  padding: 0.3rem 1rem 0.3rem 1rem;
  background: black;
  color: white;
  border-style: solid;
  border-color: black;
  text-align: center;
  width: 7rem;
  &:hover {
    color: #1d1d1d;
    background: #f1f3f0;
  }
  &::after {
    border-bottom: none;
  }
  span {
    margin-top: 5px;
  }
`;

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  &:first-of-type {
    flex-direction: row;
  }
  &:first-of-type div {
    width: 100%;
  }
`;
const Form = styled.form`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    border: 1px solid black;
    padding-left: 0.2rem;
  }
  input {
    height: 2rem;
  }

  textarea {
    min-height: 5rem;
  }
`;

const NameInputs = styled.div`
  display: flex;
  gap: 1rem;
  input {
    width: 50%;
  }
`;

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function CoursePage() {
  const router = useRouter();
  const { slug } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [disableButton, setDisabledButton] = useState(false);

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      client
        .fetch(`*[_type == "course"]`)
        .then((coursesData) => {
          if (!coursesData || coursesData.length === 0) {
            router.replace('/404');
          } else {
            setCourses(coursesData);
          }
        })
        .catch((error) => {
          console.error('Error fetching courses:', error);
          setError('Failed to load courses.');
        })
        .finally(() => setIsLoading(false));
    }
  }, [slug, router]);

  useEffect(() => {
    if (courses) {
      const course = courses.find((course) => course.slug.current === slug);
      if (course) {
        setSelectedCourse(course);
      } else {
        setError('Course not found');
        router.replace('/404');
      }
    }
  }, [courses, slug, router]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setDisabledButton(true);
    const { firstName, surname, email, phone, message } = formData;

    const requestData = {
      firstName,
      surname,
      email,
      phone,
      message,
      course: selectedCourse?.name,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Tack! Din förfrågan har skickats.');
      } else {
        setStatus('Något gick fel, försök igen senare.');
      }
    } catch (error) {
      setStatus('Fel vid skickande av formulär.');
    } finally {
      setFormData({
        firstName: '',
        surname: '',
        email: '',
        phone: '',
        message: '',
      });
      setDisabledButton(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Layout>
      <Wrapper>
        <Content>
          <h1>{selectedCourse?.name}</h1>
          <div>
            <div>
              <small>Instruktör: {selectedCourse?.instructor}</small>
            </div>
            <div>
              <small>När: {selectedCourse?.startDate}</small>
            </div>
            <div>
              <small>Antal timmar: {selectedCourse?.hour} h</small>
            </div>
            <div>
              <small>Pris: {selectedCourse?.price} kr</small>
            </div>
            <div>
              <small>
                Antal platser: {selectedCourse?.seats}{' '}
                {selectedCourse?.freeSeats === 0
                  ? '(Fullbokat)'
                  : `(${selectedCourse?.freeSeats} lediga)`}
              </small>
            </div>
          </div>
          <div>
            {selectedCourse?.description ? (
              <SanityBlockContent blocks={selectedCourse.description} />
            ) : null}
          </div>

          {selectedCourse?.freeSeats === 0 ? (
            'Kursen är för tillfället fullbokad'
          ) : (
            <Form onSubmit={onSubmit}>
              <h2>Boka kursplats</h2>
              <FormBlock>
                <div>
                  <label htmlFor='firstName'>Ange ditt förnamn</label>{' '}
                  <label htmlFor='surname'>och efternamn</label>
                </div>
                <NameInputs>
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    id='firstName'
                    placeholder='Förnamn'
                    required
                  />
                  <input
                    type='text'
                    name='surname'
                    value={formData.surname}
                    onChange={handleChange}
                    id='surname'
                    placeholder='Efternamn'
                    required
                  />
                </NameInputs>
              </FormBlock>
              <FormBlock>
                <label htmlFor='email'>Ange din emailadress</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  id='email'
                  placeholder='email@email.com'
                  required
                />
              </FormBlock>
              <FormBlock>
                <label htmlFor='phone'>Ange ditt telefonnummer</label>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  id='phone'
                  placeholder='0702000000'
                  required
                />
              </FormBlock>
              <FormBlock>
                <label htmlFor='message'>Meddelande</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  id='message'
                  placeholder='Skriv ditt meddelande...'
                ></textarea>
              </FormBlock>
              <FormBlock>
                <p>{status}</p>
                <Button type='submit' disabled={disableButton}>
                  {disableButton ? (
                    <ClipLoader
                      color='#994ff3'
                      size={14}
                      aria-label='Loading Spinner'
                      data-testid='loader'
                    />
                  ) : (
                    'Skicka förfrågan'
                  )}
                </Button>
              </FormBlock>
            </Form>
          )}
        </Content>
        <ImageWrapper>
          <Image
            src={selectedCourse?.image && urlFor(selectedCourse?.image).url()}
            alt={selectedCourse?.image?.alt || 'Course image'}
            fill
          />
        </ImageWrapper>
      </Wrapper>
    </Layout>
  );
}
