import './App.css';
import Card from "./components/Card";

import dumdum from './data/feed.json';

function App() {
    return (
        <div className={"app"}>
            <div className={"mainTitle"}>GitHub Stars Feed</div>
            <div className={"cards"}>
                {
                    dumdum.map((data, i) => {
                        return <Card title={data.title} url={data.link} summary={data.summary} name={data.author.name}
                                     uri={data.author.uri} updated={data.updated}
                                     onClickUrl={() => window.open(data.link,'_blank')}
                                     onClickUri={() => window.open(data.author.uri, '_blank')}/>
                    })
                }
            </div>
        </div>
    );
}

export default App;

