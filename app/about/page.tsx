import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-16 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <PageHeader
          title="About"
          subtitle="The story behind the research."
        />

        {/* Story Section */}
        <section className="mb-16 pl-6 border-l-2 border-violet-500/50">
          <h2 className="font-serif text-2xl font-medium text-violet-300 mb-6">
            My Journey
          </h2>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              My path into health AI started with a simple question: could a smartphone detect 
              tuberculosis from just a cough? That curiosity led me to develop SCOMAE, a deep 
              learning system that achieved state-of-the-art accuracy in TB detection through 
              cough acoustics. The project earned recognition at Regeneron ISEF 2024, including 
              awards from USAID and Chevron, but more importantly, it showed me the potential 
              of accessible diagnostic tools.
            </p>
            <p>
              That work caught the attention of Google Research, where I now serve as an External 
              Student Researcher. I pitched the idea of extending audio diagnostics to Google{"'"}s 
              medical AI efforts, and they gave me a $150k GPU grant to develop audio capabilities 
              for Gemini and MedGemma. It{"'"}s surreal to see my ISEF foundation model becoming a 
              building block for one of the world{"'"}s largest AI systems.
            </p>
            <p>
              I{"'"}m currently a freshman at Brown University studying Applied Math and Computer 
              Science, maintaining a 4.0 GPA while juggling research and the occasional 
              game of competitive Catan.
            </p>
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-16 pl-6 border-l-2 border-blue-500/50">
          <h2 className="font-serif text-2xl font-medium text-blue-300 mb-6">
            Beyond the Lab
          </h2>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              When I{"'"}m not training models or debugging code, you{"'"}ll likely find me in 
              competition. I was a 6x varsity athlete at Taft, competing in cross country, track 
              (300m hurdles), and wrestling (165lb weight class). Sports taught me that consistency 
              beats talent, and that the best preparation happens when no one{"'"}s watching.
            </p>
            <p>
              I{"'"}m also unreasonably competitive at board games. I hold the all-time ELO world 
              record on Colonist.io (the largest online Catan platform with 4.3 million players) 
              and was the youngest player to qualify for US Catan Nationals, where I placed 30th 
              out of 142.
            </p>
            <p>
              Economics was another competitive outlet—I captained my high school team to 2nd place 
              at the National Economics Challenge, with our quiz bowl round streamed live on NBC.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16 pl-6 border-l-2 border-rose-500/50">
          <h2 className="font-serif text-2xl font-medium text-rose-300 mb-6">
            What Drives Me
          </h2>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              Healthcare is fundamentally an access problem. The best diagnostic tools mean nothing 
              if they{"'"}re locked behind expensive equipment and specialist appointments. I believe 
              AI can democratize diagnostics—turning every smartphone into a screening device, every 
              rural clinic into a specialist office.
            </p>
            <p>
              That{"'"}s why I focus on audio and low-resource approaches. A cough recording costs 
              nothing to capture. If we can make that recording clinically useful, we{"'"}ve just 
              given billions of people access to early detection they never had before.
            </p>
            <p>
              I{"'"}m not interested in AI that replaces doctors. I{"'"}m interested in AI that 
              reaches patients who{"'"}ll never see one.
            </p>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="pl-6 border-l-2 border-cyan-500/50">
          <h2 className="font-serif text-2xl font-medium text-cyan-300 mb-6">
            Education
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-3 h-3 mt-1.5 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
              <div>
                <h3 className="font-medium text-white">Brown University</h3>
                <p className="text-sm text-white/50">B.Sc Applied Mathematics & Computer Science • 4.0 GPA • Class of 2029</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-3 h-3 mt-1.5 rounded-full bg-blue-500/60" />
              <div>
                <h3 className="font-medium text-white/70">The Taft School</h3>
                <p className="text-sm text-white/50">High School • Watertown, CT • Class of 2025</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-3 h-3 mt-1.5 rounded-full bg-cyan-500/40" />
              <div>
                <h3 className="font-medium text-white/70">Shanghai American School</h3>
                <p className="text-sm text-white/50">Middle School • Shanghai, China</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
