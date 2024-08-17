import FilterSection from "../components/FilterSection";
import Posts from "../components/Posts";

function Home() {
  return (
    <div>
      {/* <!-- main --> */}
      <section className="wrapper">
        <aside>
          <FilterSection />
        </aside>
        {/* <!-- posts container  --> */}
        <Posts/>
        {/* <!-- posts container ends --> */}
      </section>
    </div>
  );
}

export default Home;