import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  '2S0C9OYKM6',
  '7ba42782fc415dedae99de7c55229f41'
);

export default function IndexPage() {
  return (
    <InstantSearch searchClient={searchClient} indexName="dev_laurens">
      <SearchBox />
      <Hits
        hitComponent={({ hit }) => (
          <pre key={hit.objectID}>{JSON.stringify(hit, null, 2)}</pre>
        )}
      />
    </InstantSearch>
  );
}
