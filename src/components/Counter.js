import { connect } from "react-redux";
import * as actions from "../actions"; //Action Creators
import { bindActionCreators } from "redux";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    );
}

const mapStateToProps = (state) => { // mapStateToProps должна быть чистой и синхронной функцией, как и функция Reducer!
    return {
        counter: state.value
    };
}

// const mapDispatchToProps = (dispatch) => {
//     // const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
//     // return {
//     //     // inc: () => dispatch({type: 'INC'}),
//     //     // dec: () => dispatch({type: 'DEC'}),
//     //     // rnd: () => dispatch({type: 'RND', payload: 2})

//     //     // inc: () => dispatch(inc()),
//     //     // dec: () => dispatch(dec()),
//     //     // rnd: () => {
//     //     //     const value = Math.floor(Math.random() * 10);
//     //     //     dispatch(rnd(value))
//     //     // }

//     //     inc,        //Сокращённый вариант с ипользованием функции bindActionCreators
//     //     dec,        //Перенёс часть функционала в файл actions.js
//     //     rnd
//     // };

//     return bindActionCreators(actions, dispatch); //Можно и так. Он вернёт объект со всеми привязанными Action Creators к dispatch'у
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, actions)(Counter); //Можно отправлять и объект! При такой записи действия будут проходить автоматически