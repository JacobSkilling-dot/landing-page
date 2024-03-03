import Spline from "@splinetool/react-spline";
import { MoveRight } from "lucide-react";
// import styles from './src/styles/globals.css';
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

export default function Home() {
  return (
    <main className={`chest`}>
      <div>
        <div className={'top-nav'}>
          <button className="">Sign Up</button>
        <img src="logo.png" height={'1em'} alt=""/>
        </div>
      </div>
      <h1 className={'title'}>Discover New Music!</h1>
      <h3 className={'body-text'}>Introducing TuneTrove - your go-to music companion! </h3> 
      <h4>Discover the top artists, personalized genres, and nearby <br></br>concerts effortlessly with our sleek app. <br></br>
      Elevate your musical journey and stay in tune with the latest music. </h4>
      <div className={'chest2'}>
      <Spline scene="https://prod.spline.design/8HwRqvHFr2ryQiZK/scene.splinecode" 
      style={{ width: '60%', marginLeft: 'auto', marginBottom: '0em' }}/>
      </div>
      <Spline scene="https://prod.spline.design/x4-Tl1sg2oYg1HSV/scene.splinecode"
      style={{ width: '100%', marginLeft: 'auto', marginTop: '10em' }}/> 
      <Spline scene="https://prod.spline.design/MX1xXSKVFB-dMmDs/scene.splinecode"
      style={{ width: '100%', marginLeft: 'auto', marginTop: '0em', height:"40em" }}/>
      <div className={'footer'}>
        <center><h4>© Jacob Skilling</h4>
        </center>
        <center><h4>https://github.com/justinweiyungwu/mdia-3109-project</h4>
        </center>


      </div>

    </main>
  );
}
