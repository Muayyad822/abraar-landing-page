import { ScrollAnimation } from './ScrollAnimation'

function CourseCard({ title, description, onLearnMore, delay = 0 }) {
  return (
    <ScrollAnimation animation="fadeInUp" delay={delay}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl border border-gray-100 group h-full flex flex-col">
        <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center overflow-hidden flex-shrink-0">
          <span className="text-white text-6xl opacity-20">
            {title.charAt(0)}
          </span>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-3 text-blue-700">{title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
          <button
            onClick={onLearnMore}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-auto"
            style={{
              transition: 'all 0.3s ease'
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



