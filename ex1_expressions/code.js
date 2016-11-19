var user = {
  name:'Uday'
};
ReactDOM.render(
  <div>
    <h3>Date Field As expression:</h3>
    <p>Today Date {new Date().toLocaleDateString()}!</p>
    <h3>Math Operation as expression:</h3>
    <p>2*2 = {2*2}</p>
    <h3>Math Operation as expression:</h3>
    <p>2*2 = {2*2}</p>
    <h3>Object as expression:</h3>
    <p>Hello {user.name}!</p>
  </div>,
  document.getElementById('root')
);
