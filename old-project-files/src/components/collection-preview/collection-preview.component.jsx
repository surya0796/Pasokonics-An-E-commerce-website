import React from "react";

import './collection-preview.styles.scss'

import { CollectionItem } from "../collection-item/collection-item.component";

export const CollectionPreview = ({ title, items, id }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title}</h2>
      <div className="preview">{items
      .filter((item,idx)=> idx < 4)
      .map(({  id, ...otherItemProps }) => (<CollectionItem key={id} {...otherItemProps} /> 
      ))}
      </div>
    </div>
  );
};

