import FeedItem from "@/components/FeedItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// import { PageObjectResponse , QueryDatabaseResponse} from '@notionhq/client/build/src/api-endpoints';


export default async function Home() {


  return (
    <>
      <Navbar />
      <FeedItem />
      <Footer />
    </>
  );
}   
