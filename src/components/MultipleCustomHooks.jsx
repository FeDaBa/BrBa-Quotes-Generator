import { useFetch, useCounter } from "../hooks";

import { LoadingQuote, Quote } from "./";

import background from '../assets/background.jpg'

const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

  const { data, isLoading, } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>

    <h1 className="text-center position-absolute vw-100 bg-success text-white py-4">Breaking Bad Quotes</h1>

      <main
        className="m-0 p-0 vh-100 row justify-content-center align-items-center"
        style={{
          backgroundImage:`url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >

        <div className="d-flex flex-column align-items-center">

            {
              isLoading
              ? <LoadingQuote />
              : <Quote author={ author } quote={ quote } />
            }

            <button
              className="btn btn-warning fs-5"
              disabled={ isLoading }
              onClick={ () => increment() }
            >
              Next Quote
            </button>

        </div>

      </main>
    </>
  );
};

export default MultipleCustomHooks;
