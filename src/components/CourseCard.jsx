import { ScrollAnimation } from './ScrollAnimation'

function CourseCard({ title, description, fee, format, onLearnMore, delay = 0, img }) {
  return (
    <ScrollAnimation animation="fadeInUp" delay={delay}>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl border border-gray-100 group flex flex-col h-full min-h-[420px] md:min-h-[440px] lg:min-h-[460px] transition-all duration-300"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center overflow-hidden flex-shrink-0">
          {/* <span className="text-white text-6xl opacity-20">
                {title.charAt(0)}
                </span> */}
                <img
                src={img.src}
                alt={`${title} course image`}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-blue-700">{title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{description}</p>
                {/* Fee and Format */}
          {(fee || format) && (
            <div className="mb-4 mt-auto">
              {fee && <div className="text-sm text-blue-700 font-semibold">Fee: <span className="text-gray-700">{fee}</span></div>}
              {format && <div className="text-sm text-blue-700 font-semibold">Format: <span className="text-gray-700">{format}</span></div>}
            </div>
          )}
          <button
            onClick={onLearnMore}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4"
            style={{
              transition: 'all 0.3s ease',
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default CourseCard



