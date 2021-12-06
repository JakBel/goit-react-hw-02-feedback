import React, { Component } from "react";
import style from "./Statistics.module.css";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import SectionTitle from "../sectionTitle/SectionTitle";
import NotificationMessage from "../notificationMessage/NotificationMessage";

const options = {
  optionGood: "Good",
  optionNeutral: "Neutral",
  optionBad: "Bad",
};

class Statistics extends Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    percentage: this.props.percentage,
  };

  addGoodButton = () => {
    this.setState((state) => ({
      good: state.good + 1,
    }));
    this.countTotal();
    this.countPercentage();
  };

  addNeutralButton = () => {
    this.setState((state) => ({
      neutral: state.neutral + 1,
    }));
    this.countTotal();
    this.countPercentage();
  };

  addBadButton = () => {
    this.setState((state) => ({
      bad: state.bad + 1,
    }));
    this.countTotal();
    this.countPercentage();
  };

  countTotal = () => {
    this.setState((state) => ({
      total: state.good + state.neutral + state.bad,
    }));
  };

  countPercentage = () => {
    this.setState((state) => ({
      percentage: (state.good / state.total) * 100,
    }));
  };

  render() {
    return (
      <div className={style.container}>
        <SectionTitle title={"Please leave feedback"}>
          <FeedbackOptions
            {...options}
            addGoodButton={this.addGoodButton}
            addNeutralButton={this.addNeutralButton}
            addBadButton={this.addBadButton}
          />
        </SectionTitle>

        <SectionTitle title={"Statistics"}>
          {this.state.total > 0 ? (
            <section>
              <p>
                Good: <span>{this.state.good}</span>
              </p>
              <p>
                Neutral: <span>{this.state.neutral}</span>
              </p>
              <p>
                Bad: <span>{this.state.bad}</span>
              </p>
              <p>
                Total: <span>{this.state.total}</span>
              </p>
              <p>
                Positive feedback:{" "}
                <span>{Math.round(this.state.percentage)}%</span>
              </p>
            </section>
          ) : (
            <NotificationMessage message={"No feedback given"} />
          )}
        </SectionTitle>
      </div>
    );
  }
}

export default Statistics;
