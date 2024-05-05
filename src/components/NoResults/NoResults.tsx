type Props = {
  categoryName: string;
};

export const NoResults: React.FC<Props> = ({ categoryName }) => {
  return (
    <main className="page">
      <div className="page__content">
        <h1 className="page__title">{categoryName} not found</h1>
      </div>
    </main>
  );
};
