import React from 'react';
import { Table, Badge } from 'react-bootstrap';

/**
 * Returns an empty list if the list passed as parameter is undefined
 * or empty. It returns the list passed as an argument if it has any
 * element.
 *
 * @param list the list we would like to get items from safely
 * @return the list passed as argument if it has any item or an empty
 * list if the list is empty or undefined
 * @since 0.1.0
 */
export let checkList = (list) => {
  if (typeof list.value === "undefined") {
    return [];
  }

  if (list.value.length === 0) {
    return [];
  }

  return list.value;
};

export let handleError = (err) => {
  console.log("error:" + err);
  this.setState({blocking: false});
};

export let asJSON = (r) => r.json();


/**
 * Represents a table of sentences found in a chunk of text
 *
 * @param list the list of rows with the sentences found
 * @since 0.1.0
 */
export let ResultList = (list) => {
  const results = checkList(list);
  const listItems = results.map((result) =>
    <tr key={result}><td>{result}</td></tr>
  );

  return (
      <Table responsive>
        <thead>
          <tr>
          <th>Results <Badge>{listItems.length}</Badge></th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </Table>
  );
}
