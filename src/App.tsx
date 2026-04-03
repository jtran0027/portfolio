import myPhoto from './assets/headshot.jpg'
import githubIcon from './assets/githubicon.png'
import linkedinIcon from './assets/linkedinicon.png'
import emailIcon from './assets/gmailicon.png'

function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-[320px_1fr] md:items-center">
          <div className="bg-slate-800 rounded-2xl shadow-xl p-6 text-center border border-slate-700">
            <img
              src={myPhoto}
              alt="Jason Tran"
              className="w-48 h-48 mx-auto rounded-2xl object-cover shadow-lg"
            />
            <h2 className="text-2xl font-bold text-white mt-4">Jason Tran</h2>
            <p className="text-slate-300 mt-2">Computer Science Junior</p>

            <div className="flex justify-center gap-3 mt-5">
              <a
                href="https://github.com/jtran0027"
                className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/jason-tran-826b88355/"
                className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a
                href="mailto:jason59121@gmail.com"
                className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <img src={emailIcon} alt="Email" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-blue-400 font-semibold mb-2">About Me</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Building practical software and web applications
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a Junior Computer Science major at the University of Nebraska - Lincoln.
              I enjoy building software that solves real problems and helps users have a
              better experience. My interests include web development, software engineering,
              and database-driven applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="mb-12 py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-lg p-6 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-2xl font-semibold text-white">Sales System</h3>
              <p className="text-sm italic text-slate-400">Java • MySQL</p>
            </div>

            <p className="text-slate-300 mb-4 leading-relaxed">
              Built a Java sales system for a fictional telecommunications company
              that handled devices, plans, and services. I also designed a MySQL
              database and added reporting features to help organize sales data.
            </p>

            <a
              href="https://github.com/jtran0027/sales-system-project"
              className="text-blue-400 hover:text-blue-300 hover:underline"
            >
              View on GitHub
            </a>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-lg p-6 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-2xl font-semibold text-white">Online Grocery App</h3>
              <p className="text-sm italic text-slate-400">ASP.NET MVC • SQL Server</p>
            </div>

            <p className="text-slate-300 mb-4 leading-relaxed">
              Worked on an online grocery application by helping build the database
              and create APIs for products, users, and orders. I also collaborated
              with teammates to connect the back end with the front end.
            </p>

            <a
              href="https://github.com/jtran0027"
              className="text-blue-400 hover:text-blue-300 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="mb-12 py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-lg p-6">
          <ul className="text-slate-300 list-disc list-inside space-y-2">
            <li>Programming Languages: Java, C#, Python, SQL</li>
            <li>IDEs: Visual Studio, Visual Studio Code, Eclipse, SQL Management Studio</li>
            <li>Frameworks & Tools: ASP.NET MVC, Entity Framework Core, MySQL, SQL Server</li>
            <li>Version Control: Git, GitHub</li>
            <li>Soft Skills: Problem-solving, teamwork, communication</li>
            <li>Software Engineering Skills: Scrum, SOLID, MVC, Agile</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-700 pt-6 pb-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-300">Thanks for visiting my portfolio.</p>
        <p className="text-sm text-slate-400 mt-2">© 2026 Jason Tran</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </main>
  )
}