export const Quote = ({ author, quote }) => {

  return (

    <blockquote className="blockquote text-center shadow-lg p-4 fs-3 text-white bg-secondary bg-opacity-25 rounded-3">

      <p className="mb-8">
        { quote }
      </p>

      <footer className="blockquote-footer text-white">
        { author }
      </footer>

    </blockquote>

  )
}
