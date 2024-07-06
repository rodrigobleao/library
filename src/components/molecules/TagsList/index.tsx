import Typography from '../../atoms/Typography';
import BackgroundContainer from '../BackgroundContainer';

type TagsListProps = {
  tags: string[];
  className?: string;
};

const TagsList: React.FC<TagsListProps> = ({ tags, className }) => {
  return (
    <div className="flex flex-wrap gap-1 justify-center">
      {tags.map((tag) => (
        <BackgroundContainer
          key={tag}
          border
          className={`py-0 px-1 ${className}`}
        >
          <Typography variant="p">#{tag}</Typography>
        </BackgroundContainer>
      ))}
    </div>
  );
};

export default TagsList;
