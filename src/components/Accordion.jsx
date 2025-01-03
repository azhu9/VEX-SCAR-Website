import React, {useState} from 'react'

const Accordion = ({title, answer}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full text-black font-semibold text-2xl px-6"
      >
        <span>{title}</span>
    
    {/* plus to minus animation code */}
        <svg
          className="shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
    
    {/* answer code */}
      <div
        className={`grid overflow-hidden transition-all text-black duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
            <div className="px-12 py-4">
                {answer}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion