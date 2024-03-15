import "./App.css";
import {
  useCreatePostMutation,
  useDeletPostMutation,
  useGetApiByNameQuery,
  useUpdatePostMutation,
} from "./services/api";

function App() {
  const { data, isLoding, error, isFetching, isSuccess } =
    useGetApiByNameQuery();
  return (
    <div className="App">
      <h1>React RTQ Query</h1>
      {isLoding && <p>Loading...</p>}
      {isFetching && <h2>Fetching</h2>}
      {error && <span>Error</span>}
      {isSuccess && (
        <div>
          {data?.map((posts) => {
            return (
              <div key={posts.id}>
                <span>{posts.title}</span>
              </div>
            );
          })}
        </div>
      )}
      <div>
        <AddPost />
      </div>
    </div>
  );
}

export const AddPost = () => {
  const [addPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletPostMutation();

  const posts = {
    id: 2,
    title: "The BlockChain World",
    author: "CodeChainWizard",
  };

  const postsUpdate = {
    id: 2,
    title: "The BlockChain World Update",
    author: "CodeChainWizard(Shubham Danecha)",
  };

  const handle = async () => {
    await addPost(posts);
  };
  const handleUpdate = async () => {
    await updatePost(postsUpdate.id);
  };
  const handleDelete = async () => {
    await deletePost(posts.id);
  };

  return (
    <div>
      <button onClick={handle}>Add Post</button>
      <button onClick={handleDelete}>Delete Post</button>
      <button onClick={handleUpdate}>Update Post</button>
    </div>
  );
};

export default App;
