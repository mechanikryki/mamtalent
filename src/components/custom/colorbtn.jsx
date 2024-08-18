// echo '<div class="colorcode' . $colorcode . '">';
// echo '<div class="vote_button">
// <form action="index.php" method="post">
//     <input type="hidden" name="voted_on" value="' . $i . '">
//     <button class="vote_submit_button" type="submit">
//       <div class="vsubmit_left">
//         <span>' . $alphabet[$i - 1] . '</span>
//       </div>
//       <div class="vsubmit_right">
//         <span>';
        
//         if(strpos($rest, ';') == true) {

//           $delimiter = ";";
//           $parts = explode($delimiter, $rest);
//           $maintext = $parts[0];
//           $subtext = $parts[1];
//           echo $maintext . '<br><span class="subtext">' . $subtext . '</span>';

//         } else {
//             echo $rest;
//         }
        
//         echo '</span>
//       </div>
//     </button>
// </form>
// </div>';
// echo '</div>';

// .vote {
//     margin-bottom: 60px;
//     max-width: 300px;
// }

// .vote_submit_button {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 300px;
//     height: 50px;
//     border: none;
//     border-radius: 10px;
//     color: white;
//     font-size: 16px;
//     font-weight: bold;
//     cursor: pointer;
//     outline: none;
//     user-select: none;
//     padding: 0;
//     margin-bottom: 5px;
// }

// .vote_submit_button_disabled {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 300px;
//     height: 50px;
//     border: none;
//     border-radius: 10px;
//     color: white;
//     font-size: 16px;
//     font-weight: bold;
//     cursor: pointer;
//     outline: none;
//     user-select: none;
//     padding: 0;
//     margin-bottom: 5px;
// }

// .vsubmit_left {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 50px;
//     height: 50px;
//     border-top-left-radius: 10px;
//     border-bottom-left-radius: 10px;
//     color: white;
//     font-size: 24px;
// }

// .vote_submit_button_disabled {
//     pointer-events: none;
// }

// .colorcode1 .vsubmit_left {
//     background-color: #D60000;
// }

// .colorcode1 .vote_submit_button:hover .vsubmit_left {
//     background-color: #B70E0E;
// }

// .colorcode1 .vote_submit_button:active .vsubmit_left {
//     background-color: #920E0E;
// }

// .colorcode2 .vsubmit_left {
//     background-color: #D37200;
// }

// .colorcode2 .vote_submit_button:hover .vsubmit_left {
//     background-color: #A05600;
// }

// .colorcode2 .vote_submit_button:active .vsubmit_left {
//     background-color: #804500;
// }

// .vsubmit_left span {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .vsubmit_right {
//     box-sizing: border-box;
//       -moz-box-sizing: border-box;
//       -webkit-box-sizing: border-box;
//     width: 250px;
//     flex: 1;
//     display: flex;
//     justify-content: left;
//     align-items: center;
//     height: 50px;
//     padding: 0;
//     padding-left: 15px;
//     border-top-right-radius: 10px;
//     border-bottom-right-radius: 10px;
//     color: white;
//     font-size: 16px;
//     font-weight: bold;
// }

// .colorcode1 .vsubmit_right {
//     border-top: 2px solid #D60000;
//     border-bottom: 2px solid #D60000;
//     border-right: 2px solid #D60000;
//     background-color: #4C0101;
// }


// .colorcode1 .vote_submit_button:hover .vsubmit_right {
//     border-top: 2px solid #B70E0E;
//     border-bottom: 2px solid #B70E0E;
//     border-right: 2px solid #B70E0E;
//     background-color: #370000;
// }


// .colorcode1 .vote_submit_button:active .vsubmit_right {
//     border-top: 2px solid #920E0E;
//     border-bottom: 2px solid #920E0E;
//     border-right: 2px solid #920E0E;
//     background-color: #2C0000;
// }

// In this file I will try to make a custom button component that will be used for the voting buttons.
// Please note that the code above is from the first ever draft of this project, which does not use React nor Tailwind CSS.
// Additionaly, the original version of the code is written in PHP.

"use client"

import React, { useState } from 'react';

// import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const colorButtonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
        color: {
            default: "bg-primary text-primary-foreground",
            red: "bg-red-500 text-red-50",
            green: "bg-green-500 text-green-50",
            blue: "bg-blue-500 text-blue-50",
            yellow: "bg-yellow-500 text-yellow-50",
            purple: "bg-purple-500 text-purple-50",
            pink: "bg-pink-500 text-pink-50",
            indigo: "bg-indigo-500 text-indigo-50",
            teal: "bg-teal-500 text-teal-50",
            gray: "bg-gray-500 text-gray-50",
            black: "bg-black text-white",
            white: "bg-white text-black",
        },
        },
        defaultVariants: {
        color: "default",
        },
    }
)

const VoteButton = ({ colorcode, letter, subtext, color = 'default', children }) => {
    const [votedOn, setVotedOn] = useState(letter);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Logika obsługi submit
    };
  
    const renderText = () => {
        if (subtext) {
        return (
            <>
            {children}
            <br />
            <span className="subtext">{subtext}</span>
            </>
        );
        } else {
        return children;
        }
    };

    return (
        <button className={cn(colorButtonVariants({ color }))} type="submit">
        <div className="flex justify-center items-center w-[50px] h-[50px] border-tl-[10px] border bl-[10px] text-white">
            <span>{letter}</span>
        </div>
        <div className="box-border w-[250px] flex-1 flex justify-start items-center h-[50px] p-0 pl-[15px] rounded-tr-[10px] rounded-br-[10px] text-white text-[16px] font-bold">
            <span>{renderText()}</span>
        </div>
        </button>
    );
};

export { colorButtonVariants, VoteButton }