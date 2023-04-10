import ContentType from './ContentType';
import './test.css';

function Category({ type }) {
    console.log(type);
    return (
        <div className="container d-flex">
            {type.map((type) => {
                return (
                    <div className="test">
                        {type}
                        <div className="content-type">
                            <ContentType />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Category;
