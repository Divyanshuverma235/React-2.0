import * as React from "react";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i++;
  }
})();

class MyFeature extends React.Component {
  state = {
    articles: [
      { id: id.next().value, title: "Title1", summary: "Summary1", display: "none" },
      { id: id.next().value, title: "Title2", summary: "Summary2", display: "none" },
      { id: id.next().value, title: "Title3", summary: "Summary3", display: "none" },
    ],
    title: "",
    summary: "",
  };

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  onChangeSummary = (e) => {
    this.setState({ summary: e.target.value });
  };

  onChangeToggle = (id) => {
    this.setState((state) => {
      const x1 = [...state.articles];
      const index = x1.findIndex((x) => x.id === id);
      x1[index] = {
        ...x1[index],
        display: x1[index].display === "none" ? "" : "none",
      };
      return { ...state, articles: x1 };
    });
  };

  onClickRemove = (id) => {
    this.setState((state) => ({
      ...state,
      articles: state.articles.filter((i) => i.id !== id),
    }));
  };

  onClickAdd = () => {
    this.setState((state) => ({
      articles: [
        ...state.articles,
        {
          id: id.next().value,
          title: state.title,
          summary: state.summary,
          display: "none",
        },
      ],
      title: "",
      summary: "",
    }));
  };

  render() {
    const { articles, title, summary } = this.state;

    return (
      <>
        <section>
          <header>
            <h1>Articles</h1>
            <input placeholder="Title" value={title} onChange={this.onChangeTitle} />
            <input placeholder="Summary" value={summary} onChange={this.onChangeSummary} />
            <button onClick={this.onClickAdd}>Add</button>
          </header>
          <article>
            <ul>
              {articles.map((i) => (
                <li key={i.id}>
                  <a href={`#${i.id}`} title="Toggle Summary" onClick={() => this.onChangeToggle(i.id)}>
                    {i.title}
                  </a>
                  <button onClick={() => this.onClickRemove(i.id)}>Remove</button>
                  <p style={{ display: i.display }}>{i.summary}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </>
    );
  }
}

export default MyFeature;
