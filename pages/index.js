import Header from "./components/Header";
import dynamic from 'next/dynamic'

const DynamicChart = dynamic(() => import('./components/Chart/Chart'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})



const Home = (props) => {
  return (
    <>
      <Header />
      <h1>This is home</h1>
      <ul>
        {props.countries.map((country, index) => (
          <li key={index}>{country.name.common }</li>
        ))}
      </ul>
      <DynamicChart />
    </>
  )
}

export const getServerSideProps = async () => {
  const data = await fetch('https://restcountries.com/v3.1/all');
  const countries = await data.json()
  return {
    props: { countries }
  }
}


export default Home;