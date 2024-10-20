import { Container } from "./Container";

interface PanelProps {
    title?: string,
    subtitle?: string,
    desc?: string,
    image?: string,
    link?: string,
}

export default function Panel(props: Readonly<PanelProps>) {
    return (
        <>
        <Container
      className={`flex w-full flex-col mt-4 items-center justify-center text-center`}>
      {props.title && (
        <div className="text-sm font-bold tracking-wider text-pancho-600 uppercase">
          {props.title}
        </div>
      )}
        <div className="mx-auto w-full py-4 sm:px-6 sm:py-8 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="1.5" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#e9bd88" />
                  <stop offset={1} stopColor="#864126" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {props.title}
              </h2>
              {props.subtitle && 
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl pt-4">
                            {props.subtitle}
                        </h2>}
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {props.desc}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href={props.link}
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Provalo {">>"}
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt={props.title}
                src={props.image}
                width={1824}
                height={1080}
                className="absolute left-0 top-0 w-[38rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
        </Container>
        </>
    )
  }
  