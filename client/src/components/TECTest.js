import React, { Component } from 'react';
import { connect } from 'react-redux';

import quizQuestionsBoys from '../api/quizQuestionBoys';
import quizQuestionsGirls from '../api/quizQuestionsGirls';
import Quiz from './TECTest/Quiz';
import { ANSWER } from '../api/consts';
import { saveResultT } from '../redux/tecTest/actions';
import { UserMessage } from './TECTest/UserMessage';
import { sessionChecker } from '../redux/auth/actions';
import { trueAnswers } from '../api/trueAnswers';
import GlobalLoader from './layout/GlobalLoader';
import { Button } from 'semantic-ui-react';
import { InfoRecordMsg } from './TECTest/InfoRecordMsg';
import Delayed from "./TECTest/Delayed";

class TECTest extends Component {
  constructor(props) {
    super(props);

    // Storage.prototype.setObject = function(key, value) {
    //   this.setItem(key, JSON.stringify(value));
    // };
    //
    // Storage.prototype.getObject = function(key) {
    //   return JSON.parse(this.getItem(key));
    // };

    this.quizQuestions = [];

    this.state = {
      counter: 0,
      questionId: 1,
      question: {
        content: '',
        audio: '',
        timeline: [],
        delay: 0,
      },
      answerOptions: [],
      answer: '',
      answersCount: [],
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  async componentDidMount() {
    if (!this.props.user) await this.props.checkSession();
    if (this.props.user.gender === 'boys')
      this.quizQuestions = quizQuestionsBoys;
    if (this.props.user.gender === 'girls')
      this.quizQuestions = quizQuestionsGirls;
    setTimeout(() => this.preloadImg(this.quizQuestions), 0);
    setTimeout(() => this.preloadAudio(this.quizQuestions), 0);
    this.setState({
      question: this.quizQuestions[0].question,
      answerOptions: this.quizQuestions[0].answers,
    });
  }

  preloadImg = (quizQuestions) => {
    quizQuestions.forEach((item) => {
      if (Array.isArray(item.answers)) {
        item.answers.forEach((answer) => {
          const img = new Image();
          img.src = `./${this.props.user.gender}/img/${answer.content}`;
        });
      }
      if (item.question?.content) {
        const img = new Image();
        img.src = `./${this.props.user.gender}/img/${item.question.content}`;
      }
    });
  };

  preloadAudio = (quizQuestions) => {
    quizQuestions.forEach((item) => {
      const audio = new Audio();
      audio.src = `./${this.props.user.gender}/audio/${item.question.audio}`;
    });
  };

  handleAnswerSelected(value, index) {
    this.setUserAnswer(value, index);

    if (this.state.questionId < this.quizQuestions.length)
      setTimeout(() => this.setNextQuestion(), 300);
    else setTimeout(() => this.setResults(this.getResults()), 300);
  }

  convertAnswNum = (index) => {
    switch (index) {
      case 2: return 0;
      case 3: return 1;
      case 4: return 2;
      case 5: return 3;
      case 6: return 2;
      case 7: return 3;
      default: return index;
    }
  };

  setUserAnswer(answer, index) {
    if (answer === '' || answer === ANSWER.forward || answer === ANSWER.blank) {console.log("skip"); return}

    let answerNumber = index + 1;
    let answersCount = this.state.answersCount.length + 1;

    if (answersCount >= 11 && answersCount <= 14) answerNumber = this.convertAnswNum(index) + 1;

    this.setState((state) => ({
      answersCount: [
        ...state.answersCount,
        {
          id: state.answersCount.length + 1,
          question: this.quizQuestions[state.counter].question.audio,
          answer: answer,
          answerNumber: answerNumber,
        },
      ],
      answer: answer,
    }));
  }

  setNextQuestion() {
    let counter = this.state.counter + 1;
    let questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.quizQuestions[counter].question,
      answerOptions: this.quizQuestions[counter].answers,
      answer: '',
    });
  }

  getResults() {
    const quizResult = this.state.answersCount;
    const name = this.props.user.name;
    const date = new Date().toISOString().slice(0, 10);
    const points = quizResult.reduce(function (sum, result, i) {
      if (result.answer === trueAnswers[i]) return sum + 1;
      return sum;
    }, 0);
    return { quizResult, points, name, date };
  }

  setResults(result) {
    this.props.saveResult({ result }); //записываем БД. + записывается в стор юзер с результатами теста
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        gender={this.props.user?.gender}
      />
    );
  }

  renderResult() {
    return (
      <UserMessage
        name={this.props.user?.name}
        date={this.props.user?.results.tectest[0].date}
      />
    );
  }

  render() {
    const { loading, error } = this.props;
    if (loading) return <GlobalLoader message={'Сохранение результатов...'} />;
    if (error) {
      return (
        <div className='containerapp'>
          <div className='center-err-msg'>
            <p>Что то пошло не так - {error}</p>
            <p>Ошибка сохранения...</p>
            <Button primary onClick={() => this.setResults(this.getResults())}>
              Попробовать сохранить еще раз
            </Button>
          </div>
        </div>
      );
    }
    return (
      <div className='containerapp'>
        {!this.props.result && !this.state.counter && <Delayed waitBeforeShow={8000}><InfoRecordMsg /></Delayed>}
        {this.props.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

TECTest.defaultProps = {
  user: { gender: 'boys' },
};

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    result: state.users.user?.results.tectest[0]?.quizResult[0],
    loading: state.auth.loading,
    error: state.users.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveResult: (value) => dispatch(saveResultT(value)),
    checkSession: () => dispatch(sessionChecker()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TECTest);
