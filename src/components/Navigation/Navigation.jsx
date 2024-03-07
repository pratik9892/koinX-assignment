import React from 'react'

const Navigation = () => {
    const navItems = [
        {
          name: "Overview",
        },
        {
          name: "Fundamentals",
        },
        {
          name: "News Insights",
        },
        {
          name: "Sentiments",
        },
        {
          name: "Team",
        },
        {
          name: "Technicals",
        },
        {
          name: "Tokenomics",
        },
      ];

 

      const changeStyle = (index) => {
        return () => {
          const navItems = document.querySelectorAll(".navigation li");
          navItems.forEach((item, i) => {
            
            if (i === index) {
              item.classList.add("text-[#0141CF]");
              item.classList.add("border-b-4");
              item.classList.add("border-[#0141CF]");
              item.classList.add("py-3");
            } else {
              item.classList.remove("text-[#0141CF]");
              item.classList.remove("border-b-4");
              item.classList.remove("border-[#0141CF]");
              item.classList.remove("py-3");
            }
          });
        };
      
      }
      return (
        <div className="my-8 overflow-x-scroll no-scrollbar">
        <ul className="navigation w-[881px] h-[48px] flex items-center gap-8 px-5 py- border-b-2 border-[#D3E0E6] justify-evenly transition-all">
          {navItems.map((item,index) => {
            return (
              <li className="font-semibold text-base text-[#3E424A] cursor-pointer  transition-all  ease-in-out" key={Math.random()} onClick={changeStyle(index)}>{item.name}</li>
            );
          })}
        </ul>
        </div>
      );
}

export default Navigation