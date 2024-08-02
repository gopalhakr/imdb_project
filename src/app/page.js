import Results from "@/Components/Results";

const API_KEY = process.env.API_KEY;
// we want to fetch the data before the page is loaded to clinet side hence we will we use async await function we will wait for result hence use fetch method
export default async function Home({searchParams})
{
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(
    // for making the url dynamic we have to use the dollar sign
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated`:`/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    {next:{revalidate :100000}}
  );


  const data = await res.json();
  if(!res.ok)
  {
    throw new Error("error 404!!")
  }
  const results = data.results;
  // console.log(results)
  return  (
      <div>
        <Results results={results}/>
      </div>
    )
  
}


