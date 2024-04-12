import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import GitHubCalendar from "react-github-calendar";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Nikhil Reddy
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in United States, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>
            <h1 className="head-text mt-10">
              Days{" "}
              <span className="blue-gradient_text drop-shadow font-semibold">
                I Code
              </span>
            </h1>
          </div>

          <GitHubCalendar
            username="sainikhil1605"
            blockSize={15}
            blockMargin={5}
            color="#ffffff"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
