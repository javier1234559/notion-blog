import { notion } from '@/lib/fetchDataLocal';
const { Client } = require("@notionhq/client");
import Database , {Result} from "@/types/Database";



interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default async function Home() {


  // const posts: Post[] = response.results.map((result :Result) => ({
  //   id: result.id,
  //   title: result.properties.Title.title[0].plain_text,
  //   description: result.properties.Description.rich_text[0].plain_text,
  //   imageUrl: result.properties.Image.files[0].file.url, // Get the image URL here
  //   link: result.properties.Link.rich_text[0].href,
  // }));

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div className="parent">
            <div className="card">
              <h1>{post.title}</h1>
              <div className="visual">
                <img src={post.imageUrl} alt="" />
              </div>
              <p>{post.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}   
