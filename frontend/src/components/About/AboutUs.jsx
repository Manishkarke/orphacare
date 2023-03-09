import React from "react";
import classes from "./AboutUs.module.css";
import TeamMember from "./TeamMember";
import { teamMember } from "../../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function AboutUs() {
  return (
    <section className={classes["section-container"]}>
      <article className={classes["section-content"]}>
        <h2>About Us</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum in incidunt et. Rem quidem
          culpa voluptatum exercitationem voluptas iure accusantium error quasi, animi maxime vel
          repudiandae commodi, aspernatur quas quisquam?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima maxime ipsam
          numquam atque repudiandae ad odit labore blanditiis nisi, ratione provident in beatae
          excepturi cumque doloribus necessitatibus voluptate pariatur.
        </p>
      </article>
      <article className={classes["section-content"]}>
        <h2>How Our Team Works?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maxime quia cum
          veritatis necessitatibus hic, molestiae minus ipsa officiis voluptatibus eum, natus itaque
          soluta blanditiis commodi et molestias nobis laudantium?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nostrum itaque libero
          earum architecto! Molestiae ut odio fugiat, animi, a eveniet quisquam dolore obcaecati
          iusto earum magnam eius consectetur error.
        </p>
      </article>

      <article className={classes["section-content"]}>
        <h2>Strategy</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta consectetur impedit vero
          sed quam voluptate cumque praesentium temporibus sequi omnis fuga quas deleniti optio
          itaque, necessitatibus tempora blanditiis. Voluptatem, assumenda!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti, commodi
          dignissimos eum illum porro quos nemo provident unde esse quas impedit rem nesciunt
          exercitationem quo quisquam voluptatem sapiente possimus?
        </p>
      </article>

      <article className={classes["section-content"]}>
        <h2>Achievements</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vero? Molestias quaerat
          perferendis possimus nostrum porro iste harum. Vero odio hic architecto id culpa
          voluptatibus libero voluptates laboriosam deserunt sunt.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat officiis totam
          distinctio exercitationem alias? Magni deleniti odio dignissimos, cum nemo, provident non
          quae quibusdam distinctio pariatur totam animi ea.
        </p>
      </article>

      <article className={`${classes["section-content"]} ${classes["our-team"]}`}>
        <div>
          <h2>Our Team</h2>
          <section className={classes["team"]}>
            {teamMember.map((member, index) => (
              <TeamMember
                key={index}
                photoPath={member.photoPath}
                name={member.name}
                post={member.post}
              />
            ))}
          </section>
        </div>
        <article>
          <h2>Contact us</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} /> Phone : 98123424113
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              Email : abc@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} />
              Facebook : <a href='www.facebook.com'>Orphacare</a>
            </li>
          </ul>
        </article>
      </article>
    </section>
  );
}

export default AboutUs;
