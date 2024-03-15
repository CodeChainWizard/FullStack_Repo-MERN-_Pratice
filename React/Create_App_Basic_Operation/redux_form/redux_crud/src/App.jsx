import "./App.css";
import {
  useGetNameQuery,
  useCreatePostMutation,
  useDeletePostMutation,
} from "./services/api.jsx";

function App() {
  const { data, isLoading, isError, isFetch, isSuccess } = useGetNameQuery();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {isError && <span>Error...</span>}
      {isFetch && <span>Fetch...</span>}
      {isLoading && <span>Loading...</span>}
      {isSuccess && (
        <div>
          {data?.map((posts) => {
            return (
              <div key={posts.id}>
                <p>Id:- {posts.id}</p>
                <p>Title:- {posts.title}</p>
                <p>Author:- {posts.author}</p>
              </div>
            );
          })}
        </div>
      )}
      <AddPost />
      <DeletePost />
    </div>
  );
}

export const AddPost = () => {
  const [addPost] = useCreatePostMutation();

  const createPost = (title, author) => {
    return {
      id: new Date().getTime().toString(),
      title,
      author,
    };
  };

  const handleAddPost = async () => {
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const title = formData.get("title");
    const author = formData.get("author");

    if (title && author) {
      await addPost(createPost(title, author));
      form.reset();
    }
  };

  return (
    <div>
      <h1>Add New Data Here,</h1>
      <form action="" method="POST" onSubmit={() => handleAddPost()}>
        <div>
          <label htmlFor="">ID:- </label>
          <input
            type="text"
            typeof="hidden"
            value={new Date().getTime().toString()}
          />
        </div>
        <div>
          <label htmlFor="">Title:- </label>
          <input type="text" name="title" required />
        </div>
        <div>
          <label htmlFor="">Autor:- </label>
          <input type="text" name="author" required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export const DeletePost = () => {
  const [deletePost] = useDeletePostMutation();

  const handleDeleteData = async () => {
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const id = formData.get("id");

    if (id) {
      await deletePost(id);
      form.reset();
    }
  };

  return (
    <div>
      <h1>Delete Any data, then Enter There Data id:- </h1>
      <form action="" method="post" onSubmit={() => handleDeleteData()}>
        <label htmlFor="">Enter Id:- </label>
        <input type="text" placeholder="Enter Id:-" name="id" />
        <button type="submit">Delete Enter Id Data</button>
      </form>
    </div>
  );
};

export default App;
