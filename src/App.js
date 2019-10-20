import "./App.css";
import React, { useCallback, useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { Howl } from "howler";
import TextareaAutosize from "react-autosize-textarea";
import axios from 'axios';
var Diff = require("diff");

let audioRecieved = false;
const json = {
  results: [
    {
      alternatives: [
        {
          transcript:
            "Google I would like you to say we care about smart people and it within the confines of the noise of your process they're trying to identify intelligence rather than specific. I have like capacity time to train people okay and then like prior questions what about skills that people don't think is correlated that are strongly correlated to a successful engineer relatively easy problem solving so we've we've found that asking pretty easy to do questions is often more gently predictive been asking harder in a few questions and so I'm single question you can get signal on when the candidate comes up with the right answer",
          confidence: 0.9362825751304626,
          words: [
            {
              startTime: "0s",
              endTime: "0.300s",
              word: "Google"
            },
            {
              startTime: "0.300s",
              endTime: "0.600s",
              word: "I"
            },
            {
              startTime: "0.600s",
              endTime: "0.800s",
              word: "would"
            },
            {
              startTime: "0.800s",
              endTime: "0.900s",
              word: "like"
            },
            {
              startTime: "0.900s",
              endTime: "1s",
              word: "you"
            },
            {
              startTime: "1s",
              endTime: "1.100s",
              word: "to"
            },
            {
              startTime: "1.100s",
              endTime: "1.300s",
              word: "say"
            },
            {
              startTime: "1.300s",
              endTime: "1.900s",
              word: "we"
            },
            {
              startTime: "1.900s",
              endTime: "2.100s",
              word: "care"
            },
            {
              startTime: "2.100s",
              endTime: "2.300s",
              word: "about"
            },
            {
              startTime: "2.300s",
              endTime: "3.800s",
              word: "smart"
            },
            {
              startTime: "3.800s",
              endTime: "4s",
              word: "people"
            },
            {
              startTime: "4s",
              endTime: "4.900s",
              word: "and"
            },
            {
              startTime: "4.900s",
              endTime: "5s",
              word: "it"
            },
            {
              startTime: "5s",
              endTime: "5.100s",
              word: "within"
            },
            {
              startTime: "5.100s",
              endTime: "5.200s",
              word: "the"
            },
            {
              startTime: "5.200s",
              endTime: "5.500s",
              word: "confines"
            },
            {
              startTime: "5.500s",
              endTime: "5.700s",
              word: "of"
            },
            {
              startTime: "5.700s",
              endTime: "6.100s",
              word: "the"
            },
            {
              startTime: "6.100s",
              endTime: "6.400s",
              word: "noise"
            },
            {
              startTime: "6.400s",
              endTime: "6.500s",
              word: "of"
            },
            {
              startTime: "6.500s",
              endTime: "6.600s",
              word: "your"
            },
            {
              startTime: "6.600s",
              endTime: "7s",
              word: "process"
            },
            {
              startTime: "7s",
              endTime: "7.300s",
              word: "they're"
            },
            {
              startTime: "7.300s",
              endTime: "7.500s",
              word: "trying"
            },
            {
              startTime: "7.500s",
              endTime: "7.500s",
              word: "to"
            },
            {
              startTime: "7.500s",
              endTime: "7.700s",
              word: "identify"
            },
            {
              startTime: "7.700s",
              endTime: "8.400s",
              word: "intelligence"
            },
            {
              startTime: "8.400s",
              endTime: "9.600s",
              word: "rather"
            },
            {
              startTime: "9.600s",
              endTime: "10s",
              word: "than"
            },
            {
              startTime: "10s",
              endTime: "11.400s",
              word: "specific."
            },
            {
              startTime: "11.400s",
              endTime: "11.600s",
              word: "I"
            },
            {
              startTime: "11.600s",
              endTime: "12.300s",
              word: "have"
            },
            {
              startTime: "12.300s",
              endTime: "12.400s",
              word: "like"
            },
            {
              startTime: "12.400s",
              endTime: "13.100s",
              word: "capacity"
            },
            {
              startTime: "13.100s",
              endTime: "13.600s",
              word: "time"
            },
            {
              startTime: "13.600s",
              endTime: "14s",
              word: "to"
            },
            {
              startTime: "14s",
              endTime: "14.200s",
              word: "train"
            },
            {
              startTime: "14.200s",
              endTime: "14.400s",
              word: "people"
            },
            {
              startTime: "14.400s",
              endTime: "16.700s",
              word: "okay"
            },
            {
              startTime: "16.700s",
              endTime: "16.900s",
              word: "and"
            },
            {
              startTime: "16.900s",
              endTime: "17.100s",
              word: "then"
            },
            {
              startTime: "17.100s",
              endTime: "17.400s",
              word: "like"
            },
            {
              startTime: "17.400s",
              endTime: "17.900s",
              word: "prior"
            },
            {
              startTime: "17.900s",
              endTime: "19.300s",
              word: "questions"
            },
            {
              startTime: "19.300s",
              endTime: "19.700s",
              word: "what"
            },
            {
              startTime: "19.700s",
              endTime: "20.100s",
              word: "about"
            },
            {
              startTime: "20.100s",
              endTime: "20.900s",
              word: "skills"
            },
            {
              startTime: "20.900s",
              endTime: "21s",
              word: "that"
            },
            {
              startTime: "21s",
              endTime: "21.200s",
              word: "people"
            },
            {
              startTime: "21.200s",
              endTime: "21.500s",
              word: "don't"
            },
            {
              startTime: "21.500s",
              endTime: "21.600s",
              word: "think"
            },
            {
              startTime: "21.600s",
              endTime: "21.800s",
              word: "is"
            },
            {
              startTime: "21.800s",
              endTime: "22.400s",
              word: "correlated"
            },
            {
              startTime: "22.400s",
              endTime: "22.500s",
              word: "that"
            },
            {
              startTime: "22.500s",
              endTime: "22.700s",
              word: "are"
            },
            {
              startTime: "22.700s",
              endTime: "23.100s",
              word: "strongly"
            },
            {
              startTime: "23.100s",
              endTime: "23.300s",
              word: "correlated"
            },
            {
              startTime: "23.300s",
              endTime: "23.800s",
              word: "to"
            },
            {
              startTime: "23.800s",
              endTime: "23.900s",
              word: "a"
            },
            {
              startTime: "23.900s",
              endTime: "24.200s",
              word: "successful"
            },
            {
              startTime: "24.200s",
              endTime: "24.500s",
              word: "engineer"
            },
            {
              startTime: "24.500s",
              endTime: "25.900s",
              word: "relatively"
            },
            {
              startTime: "25.900s",
              endTime: "26.200s",
              word: "easy"
            },
            {
              startTime: "26.200s",
              endTime: "26.900s",
              word: "problem"
            },
            {
              startTime: "26.900s",
              endTime: "27.200s",
              word: "solving"
            },
            {
              startTime: "27.200s",
              endTime: "27.500s",
              word: "so"
            },
            {
              startTime: "27.500s",
              endTime: "28.100s",
              word: "we've"
            },
            {
              startTime: "28.100s",
              endTime: "29.100s",
              word: "we've"
            },
            {
              startTime: "29.100s",
              endTime: "30.400s",
              word: "found"
            },
            {
              startTime: "30.400s",
              endTime: "30.900s",
              word: "that"
            },
            {
              startTime: "30.900s",
              endTime: "33.200s",
              word: "asking"
            },
            {
              startTime: "33.200s",
              endTime: "33.900s",
              word: "pretty"
            },
            {
              startTime: "33.900s",
              endTime: "34.300s",
              word: "easy"
            },
            {
              startTime: "34.300s",
              endTime: "34.400s",
              word: "to"
            },
            {
              startTime: "34.400s",
              endTime: "34.500s",
              word: "do"
            },
            {
              startTime: "34.500s",
              endTime: "35s",
              word: "questions"
            },
            {
              startTime: "35s",
              endTime: "35.600s",
              word: "is"
            },
            {
              startTime: "35.600s",
              endTime: "36.100s",
              word: "often"
            },
            {
              startTime: "36.100s",
              endTime: "36.500s",
              word: "more"
            },
            {
              startTime: "36.500s",
              endTime: "36.900s",
              word: "gently"
            },
            {
              startTime: "36.900s",
              endTime: "37.500s",
              word: "predictive"
            },
            {
              startTime: "37.500s",
              endTime: "37.900s",
              word: "been"
            },
            {
              startTime: "37.900s",
              endTime: "38.100s",
              word: "asking"
            },
            {
              startTime: "38.100s",
              endTime: "38.600s",
              word: "harder"
            },
            {
              startTime: "38.600s",
              endTime: "38.600s",
              word: "in"
            },
            {
              startTime: "38.600s",
              endTime: "38.700s",
              word: "a"
            },
            {
              startTime: "38.700s",
              endTime: "38.800s",
              word: "few"
            },
            {
              startTime: "38.800s",
              endTime: "38.900s",
              word: "questions"
            },
            {
              startTime: "38.900s",
              endTime: "40.100s",
              word: "and"
            },
            {
              startTime: "40.100s",
              endTime: "40.300s",
              word: "so"
            },
            {
              startTime: "40.300s",
              endTime: "45.100s",
              word: "I'm"
            },
            {
              startTime: "45.100s",
              endTime: "45.500s",
              word: "single"
            },
            {
              startTime: "45.500s",
              endTime: "46.100s",
              word: "question"
            },
            {
              startTime: "46.100s",
              endTime: "46.800s",
              word: "you"
            },
            {
              startTime: "46.800s",
              endTime: "46.900s",
              word: "can"
            },
            {
              startTime: "46.900s",
              endTime: "47s",
              word: "get"
            },
            {
              startTime: "47s",
              endTime: "47.200s",
              word: "signal"
            },
            {
              startTime: "47.200s",
              endTime: "47.300s",
              word: "on"
            },
            {
              startTime: "47.300s",
              endTime: "47.500s",
              word: "when"
            },
            {
              startTime: "47.500s",
              endTime: "47.700s",
              word: "the"
            },
            {
              startTime: "47.700s",
              endTime: "48s",
              word: "candidate"
            },
            {
              startTime: "48s",
              endTime: "49s",
              word: "comes"
            },
            {
              startTime: "49s",
              endTime: "49.100s",
              word: "up"
            },
            {
              startTime: "49.100s",
              endTime: "49.200s",
              word: "with"
            },
            {
              startTime: "49.200s",
              endTime: "49.200s",
              word: "the"
            },
            {
              startTime: "49.200s",
              endTime: "49.300s",
              word: "right"
            },
            {
              startTime: "49.300s",
              endTime: "49.700s",
              word: "answer"
            }
          ]
        }
      ],
      languageCode: "en-us"
    },
    {
      alternatives: [
        {
          transcript:
            "are you get to know on whether they might they struggle how is your heart is going to solve the problem and it will be squared with these things",
          confidence: 0.8473216891288757,
          words: [
            {
              startTime: "50.600s",
              endTime: "51s",
              word: "are"
            },
            {
              startTime: "51s",
              endTime: "51.100s",
              word: "you"
            },
            {
              startTime: "51.100s",
              endTime: "51.300s",
              word: "get"
            },
            {
              startTime: "51.300s",
              endTime: "51.400s",
              word: "to"
            },
            {
              startTime: "51.400s",
              endTime: "51.500s",
              word: "know"
            },
            {
              startTime: "51.500s",
              endTime: "51.700s",
              word: "on"
            },
            {
              startTime: "51.700s",
              endTime: "52s",
              word: "whether"
            },
            {
              startTime: "52s",
              endTime: "52.200s",
              word: "they"
            },
            {
              startTime: "52.200s",
              endTime: "54.200s",
              word: "might"
            },
            {
              startTime: "54.200s",
              endTime: "54.300s",
              word: "they"
            },
            {
              startTime: "54.300s",
              endTime: "54.400s",
              word: "struggle"
            },
            {
              startTime: "54.400s",
              endTime: "54.800s",
              word: "how"
            },
            {
              startTime: "54.800s",
              endTime: "54.900s",
              word: "is"
            },
            {
              startTime: "54.900s",
              endTime: "55.300s",
              word: "your"
            },
            {
              startTime: "55.300s",
              endTime: "55.400s",
              word: "heart"
            },
            {
              startTime: "55.400s",
              endTime: "55.600s",
              word: "is"
            },
            {
              startTime: "55.600s",
              endTime: "55.700s",
              word: "going"
            },
            {
              startTime: "55.700s",
              endTime: "55.800s",
              word: "to"
            },
            {
              startTime: "55.800s",
              endTime: "56s",
              word: "solve"
            },
            {
              startTime: "56s",
              endTime: "56.100s",
              word: "the"
            },
            {
              startTime: "56.100s",
              endTime: "56.200s",
              word: "problem"
            },
            {
              startTime: "56.200s",
              endTime: "57.100s",
              word: "and"
            },
            {
              startTime: "57.100s",
              endTime: "57.800s",
              word: "it"
            },
            {
              startTime: "57.800s",
              endTime: "58s",
              word: "will"
            },
            {
              startTime: "58s",
              endTime: "58.100s",
              word: "be"
            },
            {
              startTime: "58.100s",
              endTime: "58.300s",
              word: "squared"
            },
            {
              startTime: "58.300s",
              endTime: "58.400s",
              word: "with"
            },
            {
              startTime: "58.400s",
              endTime: "58.500s",
              word: "these"
            },
            {
              startTime: "58.500s",
              endTime: "58.700s",
              word: "things"
            }
          ]
        }
      ],
      languageCode: "en-us"
    },
    {
      alternatives: [
        {
          words: [
            {
              startTime: "0s",
              endTime: "0.300s",
              word: "Google",
              speakerTag: 2
            },
            {
              startTime: "0.300s",
              endTime: "0.600s",
              word: "I",
              speakerTag: 2
            },
            {
              startTime: "0.600s",
              endTime: "0.800s",
              word: "would",
              speakerTag: 2
            },
            {
              startTime: "0.800s",
              endTime: "0.900s",
              word: "like",
              speakerTag: 2
            },
            {
              startTime: "0.900s",
              endTime: "1s",
              word: "you",
              speakerTag: 2
            },
            {
              startTime: "1s",
              endTime: "1.100s",
              word: "to",
              speakerTag: 2
            },
            {
              startTime: "1.100s",
              endTime: "1.300s",
              word: "say",
              speakerTag: 2
            },
            {
              startTime: "1.300s",
              endTime: "1.900s",
              word: "we",
              speakerTag: 2
            },
            {
              startTime: "1.900s",
              endTime: "2.100s",
              word: "care",
              speakerTag: 2
            },
            {
              startTime: "2.100s",
              endTime: "2.300s",
              word: "about",
              speakerTag: 2
            },
            {
              startTime: "2.300s",
              endTime: "3.800s",
              word: "smart",
              speakerTag: 2
            },
            {
              startTime: "3.800s",
              endTime: "4s",
              word: "people",
              speakerTag: 2
            },
            {
              startTime: "4s",
              endTime: "4.900s",
              word: "and",
              speakerTag: 2
            },
            {
              startTime: "4.900s",
              endTime: "5s",
              word: "it",
              speakerTag: 2
            },
            {
              startTime: "5s",
              endTime: "5.100s",
              word: "within",
              speakerTag: 2
            },
            {
              startTime: "5.100s",
              endTime: "5.200s",
              word: "the",
              speakerTag: 2
            },
            {
              startTime: "5.200s",
              endTime: "5.500s",
              word: "confines",
              speakerTag: 2
            },
            {
              startTime: "5.500s",
              endTime: "5.700s",
              word: "of",
              speakerTag: 2
            },
            {
              startTime: "5.700s",
              endTime: "6.100s",
              word: "the",
              speakerTag: 2
            },
            {
              startTime: "6.100s",
              endTime: "6.400s",
              word: "noise",
              speakerTag: 2
            },
            {
              startTime: "6.400s",
              endTime: "6.500s",
              word: "of",
              speakerTag: 2
            },
            {
              startTime: "6.500s",
              endTime: "6.600s",
              word: "your",
              speakerTag: 2
            },
            {
              startTime: "6.600s",
              endTime: "7s",
              word: "process",
              speakerTag: 2
            },
            {
              startTime: "7s",
              endTime: "7.300s",
              word: "they're",
              speakerTag: 2
            },
            {
              startTime: "7.300s",
              endTime: "7.500s",
              word: "trying",
              speakerTag: 2
            },
            {
              startTime: "7.500s",
              endTime: "7.500s",
              word: "to",
              speakerTag: 2
            },
            {
              startTime: "7.500s",
              endTime: "7.700s",
              word: "identify",
              speakerTag: 2
            },
            {
              startTime: "7.700s",
              endTime: "8.400s",
              word: "intelligence",
              speakerTag: 2
            },
            {
              startTime: "8.400s",
              endTime: "9.600s",
              word: "rather",
              speakerTag: 2
            },
            {
              startTime: "9.600s",
              endTime: "10s",
              word: "than",
              speakerTag: 2
            },
            {
              startTime: "10s",
              endTime: "11.400s",
              word: "specific.",
              speakerTag: 1
            },
            {
              startTime: "11.400s",
              endTime: "11.600s",
              word: "I",
              speakerTag: 1
            },
            {
              startTime: "11.600s",
              endTime: "12.300s",
              word: "have",
              speakerTag: 1
            },
            {
              startTime: "12.300s",
              endTime: "12.400s",
              word: "like",
              speakerTag: 1
            },
            {
              startTime: "12.400s",
              endTime: "13.100s",
              word: "capacity",
              speakerTag: 1
            },
            {
              startTime: "13.100s",
              endTime: "13.600s",
              word: "time",
              speakerTag: 1
            },
            {
              startTime: "13.600s",
              endTime: "14s",
              word: "to",
              speakerTag: 1
            },
            {
              startTime: "14s",
              endTime: "14.200s",
              word: "train",
              speakerTag: 1
            },
            {
              startTime: "14.200s",
              endTime: "14.400s",
              word: "people",
              speakerTag: 1
            },
            {
              startTime: "14.400s",
              endTime: "16.700s",
              word: "okay",
              speakerTag: 1
            },
            {
              startTime: "16.700s",
              endTime: "16.900s",
              word: "and",
              speakerTag: 1
            },
            {
              startTime: "16.900s",
              endTime: "17.100s",
              word: "then",
              speakerTag: 1
            },
            {
              startTime: "17.100s",
              endTime: "17.400s",
              word: "like",
              speakerTag: 1
            },
            {
              startTime: "17.400s",
              endTime: "17.900s",
              word: "prior",
              speakerTag: 1
            },
            {
              startTime: "17.900s",
              endTime: "19.300s",
              word: "questions",
              speakerTag: 1
            },
            {
              startTime: "19.300s",
              endTime: "19.700s",
              word: "what",
              speakerTag: 1
            },
            {
              startTime: "19.700s",
              endTime: "20.100s",
              word: "about",
              speakerTag: 1
            },
            {
              startTime: "20.100s",
              endTime: "20.900s",
              word: "skills",
              speakerTag: 1
            },
            {
              startTime: "20.900s",
              endTime: "21s",
              word: "that",
              speakerTag: 1
            },
            {
              startTime: "21s",
              endTime: "21.200s",
              word: "people",
              speakerTag: 1
            },
            {
              startTime: "21.200s",
              endTime: "21.500s",
              word: "don't",
              speakerTag: 1
            },
            {
              startTime: "21.500s",
              endTime: "21.600s",
              word: "think",
              speakerTag: 1
            },
            {
              startTime: "21.600s",
              endTime: "21.800s",
              word: "is",
              speakerTag: 1
            },
            {
              startTime: "21.800s",
              endTime: "22.400s",
              word: "correlated",
              speakerTag: 1
            },
            {
              startTime: "22.400s",
              endTime: "22.500s",
              word: "that",
              speakerTag: 1
            },
            {
              startTime: "22.500s",
              endTime: "22.700s",
              word: "are",
              speakerTag: 1
            },
            {
              startTime: "22.700s",
              endTime: "23.100s",
              word: "strongly",
              speakerTag: 1
            },
            {
              startTime: "23.100s",
              endTime: "23.300s",
              word: "correlated",
              speakerTag: 1
            },
            {
              startTime: "23.300s",
              endTime: "23.800s",
              word: "to",
              speakerTag: 1
            },
            {
              startTime: "23.800s",
              endTime: "23.900s",
              word: "a",
              speakerTag: 1
            },
            {
              startTime: "23.900s",
              endTime: "24.200s",
              word: "successful",
              speakerTag: 1
            },
            {
              startTime: "24.200s",
              endTime: "24.500s",
              word: "engineer",
              speakerTag: 1
            },
            {
              startTime: "24.500s",
              endTime: "25.900s",
              word: "relatively",
              speakerTag: 2
            },
            {
              startTime: "25.900s",
              endTime: "26.200s",
              word: "easy",
              speakerTag: 2
            },
            {
              startTime: "26.200s",
              endTime: "26.900s",
              word: "problem",
              speakerTag: 2
            },
            {
              startTime: "26.900s",
              endTime: "27.200s",
              word: "solving",
              speakerTag: 2
            },
            {
              startTime: "27.200s",
              endTime: "27.500s",
              word: "so",
              speakerTag: 2
            },
            {
              startTime: "27.500s",
              endTime: "28.100s",
              word: "we've",
              speakerTag: 2
            },
            {
              startTime: "28.100s",
              endTime: "29.100s",
              word: "we've",
              speakerTag: 2
            },
            {
              startTime: "29.100s",
              endTime: "30.400s",
              word: "found",
              speakerTag: 2
            },
            {
              startTime: "30.400s",
              endTime: "30.900s",
              word: "that",
              speakerTag: 2
            },
            {
              startTime: "30.900s",
              endTime: "33.200s",
              word: "asking",
              speakerTag: 2
            },
            {
              startTime: "33.200s",
              endTime: "33.900s",
              word: "pretty",
              speakerTag: 2
            },
            {
              startTime: "33.900s",
              endTime: "34.300s",
              word: "easy",
              speakerTag: 2
            },
            {
              startTime: "34.300s",
              endTime: "34.400s",
              word: "to",
              speakerTag: 2
            },
            {
              startTime: "34.400s",
              endTime: "34.500s",
              word: "do",
              speakerTag: 2
            },
            {
              startTime: "34.500s",
              endTime: "35s",
              word: "questions",
              speakerTag: 2
            },
            {
              startTime: "35s",
              endTime: "35.600s",
              word: "is",
              speakerTag: 2
            },
            {
              startTime: "35.600s",
              endTime: "36.100s",
              word: "often",
              speakerTag: 2
            },
            {
              startTime: "36.100s",
              endTime: "36.500s",
              word: "more",
              speakerTag: 2
            },
            {
              startTime: "36.500s",
              endTime: "36.900s",
              word: "gently",
              speakerTag: 2
            },
            {
              startTime: "36.900s",
              endTime: "37.500s",
              word: "predictive",
              speakerTag: 2
            },
            {
              startTime: "37.500s",
              endTime: "37.900s",
              word: "been",
              speakerTag: 2
            },
            {
              startTime: "37.900s",
              endTime: "38.100s",
              word: "asking",
              speakerTag: 2
            },
            {
              startTime: "38.100s",
              endTime: "38.600s",
              word: "harder",
              speakerTag: 2
            },
            {
              startTime: "38.600s",
              endTime: "38.600s",
              word: "in",
              speakerTag: 2
            },
            {
              startTime: "38.600s",
              endTime: "38.700s",
              word: "a",
              speakerTag: 2
            },
            {
              startTime: "38.700s",
              endTime: "38.800s",
              word: "few",
              speakerTag: 2
            },
            {
              startTime: "38.800s",
              endTime: "38.900s",
              word: "questions",
              speakerTag: 2
            },
            {
              startTime: "38.900s",
              endTime: "40.100s",
              word: "and",
              speakerTag: 2
            },
            {
              startTime: "40.100s",
              endTime: "40.300s",
              word: "so",
              speakerTag: 2
            },
            {
              startTime: "40.300s",
              endTime: "45.100s",
              word: "I'm",
              speakerTag: 2
            },
            {
              startTime: "45.100s",
              endTime: "45.500s",
              word: "single",
              speakerTag: 2
            },
            {
              startTime: "45.500s",
              endTime: "46.100s",
              word: "question",
              speakerTag: 2
            },
            {
              startTime: "46.100s",
              endTime: "46.800s",
              word: "you",
              speakerTag: 2
            },
            {
              startTime: "46.800s",
              endTime: "46.900s",
              word: "can",
              speakerTag: 2
            },
            {
              startTime: "46.900s",
              endTime: "47s",
              word: "get",
              speakerTag: 2
            },
            {
              startTime: "47s",
              endTime: "47.200s",
              word: "signal",
              speakerTag: 2
            },
            {
              startTime: "47.200s",
              endTime: "47.300s",
              word: "on",
              speakerTag: 2
            },
            {
              startTime: "47.300s",
              endTime: "47.500s",
              word: "when",
              speakerTag: 2
            },
            {
              startTime: "47.500s",
              endTime: "47.700s",
              word: "the",
              speakerTag: 2
            },
            {
              startTime: "47.700s",
              endTime: "48s",
              word: "candidate",
              speakerTag: 2
            },
            {
              startTime: "48s",
              endTime: "49s",
              word: "comes",
              speakerTag: 2
            },
            {
              startTime: "49s",
              endTime: "49.100s",
              word: "up",
              speakerTag: 2
            },
            {
              startTime: "49.100s",
              endTime: "49.200s",
              word: "with",
              speakerTag: 2
            },
            {
              startTime: "49.200s",
              endTime: "49.200s",
              word: "the",
              speakerTag: 2
            },
            {
              startTime: "49.200s",
              endTime: "49.300s",
              word: "right",
              speakerTag: 2
            },
            {
              startTime: "49.300s",
              endTime: "49.700s",
              word: "answer",
              speakerTag: 2
            },
            {
              startTime: "50.600s",
              endTime: "51s",
              word: "are",
              speakerTag: 2
            },
            {
              startTime: "51s",
              endTime: "51.100s",
              word: "you",
              speakerTag: 2
            },
            {
              startTime: "51.100s",
              endTime: "51.300s",
              word: "get",
              speakerTag: 2
            },
            {
              startTime: "51.300s",
              endTime: "51.400s",
              word: "to",
              speakerTag: 2
            },
            {
              startTime: "51.400s",
              endTime: "51.500s",
              word: "know",
              speakerTag: 2
            },
            {
              startTime: "51.500s",
              endTime: "51.700s",
              word: "on",
              speakerTag: 2
            },
            {
              startTime: "51.700s",
              endTime: "52s",
              word: "whether",
              speakerTag: 2
            },
            {
              startTime: "52s",
              endTime: "52.200s",
              word: "they",
              speakerTag: 2
            },
            {
              startTime: "52.200s",
              endTime: "54.200s",
              word: "might",
              speakerTag: 2
            },
            {
              startTime: "54.200s",
              endTime: "54.300s",
              word: "they",
              speakerTag: 2
            },
            {
              startTime: "54.300s",
              endTime: "54.400s",
              word: "struggle",
              speakerTag: 2
            },
            {
              startTime: "54.400s",
              endTime: "54.800s",
              word: "how",
              speakerTag: 2
            },
            {
              startTime: "54.800s",
              endTime: "54.900s",
              word: "is",
              speakerTag: 2
            },
            {
              startTime: "54.900s",
              endTime: "55.300s",
              word: "your",
              speakerTag: 2
            },
            {
              startTime: "55.300s",
              endTime: "55.400s",
              word: "heart",
              speakerTag: 2
            },
            {
              startTime: "55.400s",
              endTime: "55.600s",
              word: "is",
              speakerTag: 2
            },
            {
              startTime: "55.600s",
              endTime: "55.700s",
              word: "going",
              speakerTag: 2
            },
            {
              startTime: "55.700s",
              endTime: "55.800s",
              word: "to",
              speakerTag: 2
            },
            {
              startTime: "55.800s",
              endTime: "56s",
              word: "solve",
              speakerTag: 2
            },
            {
              startTime: "56s",
              endTime: "56.100s",
              word: "the",
              speakerTag: 2
            },
            {
              startTime: "56.100s",
              endTime: "56.200s",
              word: "problem",
              speakerTag: 2
            },
            {
              startTime: "56.200s",
              endTime: "57.100s",
              word: "and",
              speakerTag: 2
            },
            {
              startTime: "57.100s",
              endTime: "57.800s",
              word: "it",
              speakerTag: 2
            },
            {
              startTime: "57.800s",
              endTime: "58s",
              word: "will",
              speakerTag: 2
            },
            {
              startTime: "58s",
              endTime: "58.100s",
              word: "be",
              speakerTag: 2
            },
            {
              startTime: "58.100s",
              endTime: "58.300s",
              word: "squared",
              speakerTag: 2
            },
            {
              startTime: "58.300s",
              endTime: "58.400s",
              word: "with",
              speakerTag: 2
            },
            {
              startTime: "58.400s",
              endTime: "58.500s",
              word: "these",
              speakerTag: 2
            },
            {
              startTime: "58.500s",
              endTime: "58.700s",
              word: "things",
              speakerTag: 2
            }
          ]
        }
      ]
    }
  ]
};

const speakers = ["", "adam", "john", "sophie", "edward"];
const dialog = (sentence, i, RemoveTimeFrame) => {
  let conversations = [];
  if (i !== 2) {
    return null;
  }
  let currentSpeaker;
  let temp = "";
  let lastword;
  let epic = [];
  sentence.words.map(word => {
    // console.log(word)
    if (currentSpeaker != word.speakerTag) {
      epic.push(word);
      conversations.push([currentSpeaker, temp, epic]);
      // console.log("speaker changed", temp);
      currentSpeaker = word.speakerTag;
      temp = "";
      epic = [];
    }
    temp = temp + " " + word.word;
    epic.push(word);
  });
  conversations.push([currentSpeaker, temp, epic]);
  let remove_first = conversations.splice(0, 1);
  // console.log(conversations);

  let newConversations = conversations;
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const [tempConvo, SetTempCovo] = useState(conversations);

  const valueAdded = (value, id) => {
    var temp = tempConvo;
    temp[id][1] = value;
    SetTempCovo([...tempConvo]);
  };

  const getChange = () => {
    conversations.map((chat, index) => {
      var diff = Diff.diffWords(chat[1], tempConvo[index][1]);

      diff.forEach(function(part) {
        // green for additions, red for deletions
        // grey for common parts
        var color = part.added ? "added" : part.removed ? "removed" : "same";
        // process.stderr.write(part.value[color]);
        if (color !== "same") console.log(part.value, color);

        if (part.removed) {
          var el = part.value;
          var olderwords = chat[1].split(/[\s,]+/);
          var index = olderwords.indexOf(String(el).trim());
          // console.log(chat[2][index - 1])
          RemoveTimeFrame(chat[2][index - 1]);
        }
      });
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "10rem",
        justifyContent: "flex-start",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}
    >
      <button onClick={getChange}>Cynthesize</button>
      {conversations.map((chat, index) =>
        Chat(chat[1], chat[0], chat[2], index, valueAdded)
      )}
    </div>
  );
};

const Chat = (chat, speakerId, obj, index, valueAdded) => {
  const [chatState, SetChatState] = useState(chat);
  // const parent = useRef();
  var myColors = [
    "#E84751",
    "orange",
    "#97FF73",
    "#362EFF",
    "#FF6513",
    "green"
  ];
  const handleTextChange = event => {
    // console.log(event.target.value)
    SetChatState(event.target.value);
    valueAdded(event.target.value, index);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        justifyContent: "space-between"
      }}
    >
      <div
        style={{
          margin: "2rem",
          justifyContent: "flex-start",
          justifyContent: "space-between",
          color: myColors[speakerId]
        }}
      >
        {speakers[speakerId]}
      </div>
      {/* <div
        style={{
          margin: "1rem",
          justifyContent: "flex-start",
          justifyContent: "space-between"
        }}
      > */}
      <TextareaAutosize
        style={{
          margin: "1rem",
          justifyContent: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#282c34",
          border: "None",
          fontSize: "calc(10px + 2vmin)",
          minWidth: "80vh",
          color: "white",
          resize: "None",
          padding: "1rem"
        }}
        type="text"
        multiline="true"
        value={chatState}
        onChange={handleTextChange}
      />
      {/* </div> */}
    </div>
  );
};

function MyDropzone() {
  const [soundState, SetSound] = useState();
  var removed = [];
  const RemoveTimeFrame = value => {
    console.log("removed");
    console.log(value);
    removed.push(value);
  };

  const PlayEverything =  () => {
    var removal = [...new Set(removed)];
    console.log(removal);

    const getTime = el => {
      var val = el.replace("s", "").replace(".", "");
      return parseInt(val);
    };

    if (removal) {
      console.log(removal);
      var sprites = [];
      var start = 0;
      var end;
      var k = 0;
      removal.map(el => {
        var end = getTime(el["startTime"]);
        // var end = parseInt(el["startTime"];
        console.log([el["startTime"], el["endTime"]]);
        sprites.push([start, end - start]);
        // if (!soundState._sprite.one)
        //   soundState._sprite.one = [start, end - start];
        // else if (!soundState._sprite.two)
        //   soundState._sprite.two = [start, end - start];
        // else if (!soundState._sprite.three)
        //   soundState._sprite.three = [start, end - start];
        // else if (!soundState._sprite.four)
        //   soundState._sprite.four = [start, end - start];
        // else if (!soundState._sprite.five)
        //   soundState._sprite.four = [start, end - start];
        console.log(sprites);
        // start = parseInt(el["endTime"].replace("s", "").replace(".", ""));
        start = getTime(el["endTime"]);
      });

      sprites.push([getTime(removal[removal.length - 1]["endTime"])]);
      // sound.play()
      console.log(sprites);
      console.log("PLAYING......TADAAAA")

      // soundState.seek(500);
      
      console.log(soundState)

      var id = soundState.play();

      soundState.seek(1000, id);
      soundState.play()

      // sprites.map(async val => {
      //   console.log(val[0])
      //   await new Promise(resolve => {
      //     setTimeout(resolve, val[1])}
      //     );
      //   soundState.pause()          
      //   soundState.seek(val[0], id);
      //   soundState.play()
      //   // soundState.play();
      // });

      // if (soundState._sprite.one) {
      //   soundState.play("one");
      //   await new Promise(resolve => setTimeout(resolve, sprites[0][1]));
      // }
      // if (soundState._sprite.two) {
      //   soundState.play("two");
      //   await new Promise(resolve => setTimeout(resolve, sprites[1][1]));
      // }
      // if (soundState._sprite.three) {
      //   soundState.play("three");
      //   await new Promise(resolve => setTimeout(resolve, sprites[2][1]));
      // }
      // if (soundState._sprite.four) {
      //   soundState.play("four");
      //   await new Promise(resolve => setTimeout(resolve, sprites[3][1]));
      // }
      // if (soundState._sprite.five) {
      //   soundState.play("five");
      //   await new Promise(resolve => setTimeout(resolve, sprites[4][1]));
      // }
      // console.log(soundState.pos());
    }
  };
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
    audioRecieved = true;
    var sound = new Howl({
      src: [require("./" + acceptedFiles[0].path)]
    });

    const data = new FormData()
    data.append('file', sound)
    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    axios.post("https://e7e24ebb.ngrok.io/uploader", data, { // receive two parameter endpoint url ,form data 
  })
  .then(res => { // then print response status
    console.log(res)
  })

    // sound.play();
    SetSound(sound);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <button onClick={PlayEverything}>PLAY</button>
      <div>
        {json.results.map((alternative, i) =>
          dialog(alternative.alternatives[0], i, RemoveTimeFrame)
        )}
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyDropzone />
      </header>
    </div>
  );
}

export default App;
