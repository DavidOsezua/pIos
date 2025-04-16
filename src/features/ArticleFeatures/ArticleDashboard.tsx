import ArticleTable from "./ArticleTable";
import CreateArticlesAndShowStatus from "./CreateArticlesAndShowStatus";
import FilterAndSearchArticles from "./FilterAndSearchArticles";

type Props = {};

const ArticleDashboard = (props: Props) => {
  return (
    <div className={`space-y-10`}>
      <CreateArticlesAndShowStatus />

      <FilterAndSearchArticles />

      <ArticleTable />
    </div>
  );
};

export default ArticleDashboard;
