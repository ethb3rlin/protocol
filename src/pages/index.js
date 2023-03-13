import * as React from "react";
import refs from "../references";
import { SEO } from "../components/seo";

const FootNote = ({ id, author, description, year, url, accessed }) => (
  <li id={`fn${id}`} className="flex flex-row">
    <div className="mr-2 leading-5">[{id}]</div>
    <div className="leading-5">
      {author && <span>{author}. </span>}
      {description && <span className="italic">{description}</span>}
      {year && <span className="italic"> ({year}).</span>}
      {url && (
        <>
          <span className="text-sm"> URL: </span>
          <a href={url} target="_blank" className="font-mono text-xs">
            {url}.
          </a>
        </>
      )}
      {accessed && <span> (accessed: {accessed}).</span>}
      <a href={`#ref${id}`}>↩</a>
    </div>
  </li>
);

const Ref = ({ src }) => {
  return (
    <sup>
      <a href={`#fn${src.id}`} id={`ref${src.id}`}>
        {src.id}
      </a>{" "}
    </sup>
  );
};

const IndexPage = () => {
  return (
    <main className="my-24">
      <header className="text-center">
        <h1 className="font-bold">Protocol Berg</h1>
        <p className="italic text-center">
          The decentralized protocol and infrastructure conference.
        </p>
        <p className="text-center">
          A Department-of-Decentralization
          <Ref src={refs.dod} /> event; edition 0b11111100111.
        </p>
        <p className="author">
          <div className="mt-8 text-lg">
            September 15, 2023, Kreuzberg, Berlin
          </div>
        </p>
      </header>

      <div className="abstract">
        <h2 className="font-bold">Abstract</h2>
        <small className="mt-4">
          Protocol Berg is a novel summit providing a location specifically for
          protocol research, decentralized infrastructure, and core-developer
          experience. The one-day event with two stages, opportunities for
          technical workshops, and protocol community gatherings brings together
          protocol researchers and other stakeholders from different
          decentralized protocols. Attendance is free of charge. The event will
          not host any sponsors or commercial talks.
        </small>
      </div>
      <section>
        <h2 className="font-bold">Conference</h2>
        <p>
          Protocol Berg is a one-day technical conference targeting an audience of
          protocol engineers, system engineers, network engineers,
          blockchain-operation engineers, decentralized-infrastructure
          administrators, researchers, and other curious minds.
        </p>
        <p>
          Topics covered by the event orbit mainly around consensus protocols,
          distributed virtual machines, peer-to-peer networking, decentralized
          infrastructure, open-source governance, and protocol research.
        </p>
        <p>
          We expect 500-600 attendees, and tickets will be free, as in{" "}
          <span className="italic">free lemonade</span>.
          All attendees have to adhere to the event's{" "}
          <a href="/conduct">Code of Conduct</a>.
        </p>
        <p>
          Protocol Berg is a donation-backed non-profit event. Therefore, there
          will be no sponsors.
        </p>
      </section>

      <section>
        <h2 className="font-bold">Call for Participation</h2>
        <p>Applications for tickets will open shortly.</p>
        <p>
          To submit a technical talk or workshop proposal, use our Pretalx
          interface: <br />
          <a
            href="https://speak.protocol.berlin"
            target="_blank"
            className="ml-12"
          >
            https://speak.protocol.berlin
          </a>
        </p>
        <p>
        To provide feedback or ask questions, please email us:{" "}
          <br />
          <a href="mailto:hello@protocol.berlin" className="ml-12">
            hello@protocol.berlin{" "}
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-bold">Venue</h2>
        <p>
          The <span className="italic">Heeresbäckerei</span> (magazine in the
          army bakery)
          <Ref src={refs.heeresbaeckerei} /> in Berlin-Kreuzberg is an
          impressive industrial monument located directly at the river Spree.
          The magazine in the west wing was used as a warehouse since 1890.
          Lorries with flour and grain travelled on rails between the magazine
          and the bakery. The brick building has retained its substance over the
          years. Cast iron columns carry a five-meter-high ceiling. The parquet
          is made of old beech. Deep arched windows open the room to the light.
          The result is a magnificent venue with charm - perhaps
          one of the most beautiful in Berlin-Kreuzberg
          <Ref src={refs.xberg} />.
        </p>
        <p>
          The venue will be equipped with two stages. In addition, there will be
          workshop areas for deep technical study and knowledge-sharing classes.
        </p>
        <p>
          <span className="font-bold">Latitude/Longitude:</span>
          <br />
          <span className="ml-12">52.504853, 13.434746</span>
          <br />
          <span className="font-bold">Street Address:</span>
          <br />
          <span className="ml-12">
            K&ouml;penicker Stra&szlig;e 16-17, 10997 Berlin-Kreuzberg
          </span>
          .
        </p>
      </section>

      <section>
        <h2 className="font-bold">About the Host</h2>
        <p>
          The <a href="/decentralization" className="italic">Department
          of Decentralization</a> is a collective of people from various crypto,
          decentralization, and blockchain communities in and around Berlin. The
          group assembled in 2018 to organize events such as ETHBerlin
          <Ref src={refs.ethberlin} /><Ref src={refs.ethb2rlin} /><Ref src={refs.ethb3rlin} />{" "}
          or GoerliCon<Ref src={refs.goerli} /> and has been active since.
        </p>
        <p>
          The aim is to be an agnostic vehicle to drive adoption, educate
          newcomers, and raise awareness of the challenges and benefits of
          decentralization and open-source software. Currently, the
          Department is primarily run from Berlin. The collective is composed
          of around a dozen members who contribute voluntarily.
        </p>
      </section>
      <footer className="footnotes mt-8">
        <ul>
          {
            // make refs object into an array by sorting their id and map over it
            Object.values(refs)
              .sort((a, b) => a.id - b.id)
              .map((ref) => (
                <FootNote key={ref.id} {...ref} />
              ))
          }
        </ul>
        <p className="mt-4 italic">
          <br />
          <a href="/contact">Impressum</a>.
        </p>
      </footer>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    {" "}
    <SEO />
  </>
);
