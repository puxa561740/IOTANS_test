import TreeNode from './TreeNode';

const TreeData = ({data}) => {

  return (<>
  <div>
    <ul>
      {data.map((tree, i) => (
        <TreeNode node={tree}/>
      ))}
    </ul>
  </div>  
  </>)
};




export default TreeData;