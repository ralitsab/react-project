export default function CommentForm({ submitHandler, changeHandler, values }) {
  return (
    <form className="comment-form h-full flex flex-col space-y-4" onSubmit={submitHandler}>
    <input
      type="text"
      className="heading-input border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#14433D]"
      placeholder="Add a heading"
      name="heading"
      value={values.heading}
      onChange={changeHandler}
    />
    <textarea
      className="comment-textarea border h-full border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#14433D]"
      placeholder="Add a comment"
      name="comment"
      value={values.comment}
      onChange={changeHandler}
    />
    <button
      type="submit"
      className="submit-button border-solid rounded-full font-bold text-lg text-center bg-[#14433D] text-white py-2 px-10 mb-8 transition ease-in-out delay-150 hover:bg-[#12332A] hover:text-white duration-300"
    >
      Submit
    </button>
  </form>
  );
}
