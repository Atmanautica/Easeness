import Link from "next/link";

export default function About() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        About
        <br />
        <small>
          <Link href="/">
            <a className="underline hover:text-success duration-200 transition-colors">Back Home</a>
          </Link>
        </small>
      </h1>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">🌈 We evolve culture with technology ⚗️ </h2>
        <p>The methodologies we champion for life and work are on the rise: </p>
        <ul className="details">
          <li>
            radical anti-oppression, radical empathy, and radical honesty,
          </li>
          <li>
            decentralized, distributed, remote, asynchronous collaboration
          </li>
          <li>functional, reactive, paired programming of agile, lean MVPs</li>
          <li>
            progressive engagement, rapid prototyping, declarative data graphs
          </li>
          <li>continuous improvement, systems thinking, complexity science</li>
          <li>
            the primacy of consciousness, the law of attraction, satchitananda
          </li>
        </ul>
        <h3 className="text-2xl font-bold lg:text-3xl">
          We sharpen the{" "}
          <a href="https://quoteinvestigator.com/2014/03/29/sharp-axe/">axe</a>,
          then plant trees instead.
        </h3>
        <p>
          Concretely speaking, we like to use ECMAScript, HTML, CSS and data in
          their manifold forms to rapidly prototype and test concepts and
          designs with the users they are intended to benefit. We design the
          whole journey, and develop the full stack. We are equally experienced
          with venture-backed startups, small and medium businesses, and Big
          Corporate.
        </p>
        <p>
          If you would like to enlist our services,{" "}
          <a href="/contact">drop us a line</a>.
        </p>

        {/* <Tools /> */}

        <h3 className="text-2xl font-bold lg:text-3xl"> 🙏 Gratitude 💫</h3>
        <p>
          … for the panorama of opportunities our career, adventures, and
          studies provide us, opportunities to be of service to humanity and to
          our Lover Nature. And while we recognize that we do not yet inhabit
          the more beautiful world our hearts know is possible, we devote
          ourself to the garden.
        </p>
      </div>
    </section>
  );
}
