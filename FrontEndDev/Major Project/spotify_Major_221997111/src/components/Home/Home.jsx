import Layout from "../../Layout/Layout";
import { FaAngleLeft, FaAngleRight, FaSearch, FaUser } from "react-icons/fa";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import SongBar from "../MasterBar/SongBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { userActor } from "../../states/Actors/UserActor";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../states/Contet";
import Footer from "../Footer/Footer";

export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "The Hills",
    artist: "Weeknd",
    mp3: new Audio("/assets/mp3/1.mp4"),
    img: "/assets/11.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Creepin",
    artist: "Weeknd",
    mp3: new Audio("/assets/mp3/2.mp4"),
    img: "/assets/22.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Reminder",
    artist: "Weeknd",
    mp3: new Audio("/assets/mp3/3.mp4"),
    img: "/assets/33.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Starboy",
    artist: "Weeknd",
    mp3: new Audio("/assets/mp3/4.mp4"),
    img: "/assets/44.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Call Out My Name",
    artist: "Weeknd",
    mp3: new Audio("/assets/mp3/5.mp4"),
    img: "/assets/55.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Blinding Lights",
    artist: "Weeknd",
    mp3: new Audio("/assets/mp3/6.mp4"),
    img: "/assets/66.jpg",
  },

  {
    id: Math.random() * Date.now(),
    title: "After Hours",
    artist: "Weeknd",
    mp3: new Audio("/assets/mp3/7.mp4"),
    img: "/assets/77.jpg",
  },

  {
    id: Math.random() * Date.now(),
    title: "Save Your Tears",
    artist: "Weeknd",
    mp3: new Audio("/assets/mp3/8.mp4"),
    img: "/assets/88.jpg",
  },

  {
    id: Math.random() * Date.now(),
    title: "I Was Never There",
    artist: "Weeknd",
    mp3: new Audio("/assets/mp3/9.mp4"),
    img: "/assets/99.jpg",
  },

  {
    id: Math.random() * Date.now(),
    title: "Die For You",
    artist: "Weeknd",
    mp3: new Audio("/assets/mp3/10.mp4"),
    img: "/assets/100.jpg",
  },

];

const Home = () => {

  const { getUser } = useGlobalContext();

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout>
      <Navbar />

      <div className="tertiary_bg ml-2 px-4 py-4 home ">
        <div className="flex justify-between mb-4 pt-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Focus
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Spotify List
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <Footer/>
      <SongBar />
    </Layout>
  );
};

export default Home;
