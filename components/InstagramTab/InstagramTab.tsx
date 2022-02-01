import { useState, Fragment } from 'react';
export default function InstagramTab({ data, res }) {
  console.log(data, res);
  const [repoList, setRepoList] = useState([]);
  return (
    <div>
      {repoList.map(({ id, html_url, full_name, pushed_at, topics, description }) => {
        return (
          <Fragment key={id}>
            <br />
          </Fragment>
        );
      })}
    </div>
  );
}
