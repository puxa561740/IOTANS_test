import {useState} from 'react';
import TreeData from './TreeData';

const TreeNode=({node})=>{
  
  const [childVisible, setChildVisible] = useState(false);

  const hasChild = node.sub ? true : false;
  const hasChildLength = node.sub.length > 0 ? true : false;

  return (<li>
    <div className={`tree_bac ${childVisible && hasChildLength? 'active' : '' } `} onClick={e => {
      setChildVisible(!childVisible);
      }}>
      {hasChild &&  (
        <div className={`${childVisible ? 'active vis' : 'vis' } `}>
          {childVisible && hasChildLength ? (
              <span className="material-icons">
                folder_open
              </span>
            )
           : (
            hasChildLength ? (
                <span className="material-icons">
                  folder
                </span>
              )
              
              : (
                <span className="material-icons">
                    library_books
                </span>
              )
            )
          
          }
          <p>{node.name}</p>
        </div>
      )}
    </div>
    {
      hasChild && childVisible && (
          <TreeData data={node.sub}/>
      )
    }
  </li>)
};

export default TreeNode;