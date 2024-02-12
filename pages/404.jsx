import Layout from '@/components/Layout/Layout';
import styled from 'styled-components';

export default function NotFound() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <Layout>
      <h1>Sidan finns inte</h1>
      <p>Oj då. Den här sidan verkar inte finnas.</p>
      <a onClick={goBack}>Gå tillbaka</a>
    </Layout>
  );
}
