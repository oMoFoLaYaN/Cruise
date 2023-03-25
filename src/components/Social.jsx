import React from "react";
import { socialMedia } from "../constants";

const Social = (props) => (
   <div className={`${props.className}`}>
      {socialMedia.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          className="text-xl w-max"
        >
          <i
            className={`${props.color} text-2xl hover:text-sky-500 dark:hover:text-sky-300 ${social.icon}`}
          />
        </a>
      ))}
    </div>
);

export default Social;
