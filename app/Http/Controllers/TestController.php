<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function storePage1(Request $request)
    {
        $request->validate([
            'answers' => 'required|array',
            'answers.*' => 'string'
        ]);

        $correctAnswers = [
            'q1' => 'a', 'q2' => 'a', 'q3' => 'a', 'q4' => 'a', 'q5' => 'a',
            'q6' => 'a', 'q7' => 'a', 'q8' => 'a', 'q9' => 'a', 'q10' => 'a'
        ];

        $score = 0;
        foreach ($request->answers as $question => $answer) {
            if ($correctAnswers[$question] === $answer) {
                $score += 1;
            }
        }

        return redirect()->route('test.page2.show')->with([
            'page1_score' => $score
        ]);
    }

    public function storePage2(Request $request)
    {
        $request->validate([
            'answers' => 'required|array',
            'answers.*' => 'string'
        ]);

        $correctAnswers = [
            'q1' => 'a', 'q2' => 'a', 'q3' => 'a', 'q4' => 'a', 'q5' => 'a',
            'q6' => 'a', 'q7' => 'a', 'q8' => 'a', 'q9' => 'a', 'q10' => 'a'
        ];

        $score = 0;
        foreach ($request->answers as $question => $answer) {
            if ($correctAnswers[$question] === $answer) {
                $score += 3;
            }
        }

        $totalScore = $request->session()->get('page1_score', 0) + $score;

        return redirect()->route('test.page3.show')->with([
            'page2_score' => $score,
            'total_score' => $totalScore
        ]);
    }

    public function storePage3(Request $request)
    {
        $request->validate([
            'answers' => 'required|array',
            'answers.*' => 'string'
        ]);

        $correctAnswers = [
            'q1' => 'a', 'q2' => 'a', 'q3' => 'a', 'q4' => 'a', 'q5' => 'a',
            'q6' => 'a', 'q7' => 'a', 'q8' => 'a', 'q9' => 'a', 'q10' => 'a'
        ];

        $score = 0;
        foreach ($request->answers as $question => $answer) {
            if ($correctAnswers[$question] === $answer) {
                $score += 5;
            }
        }

        $finalScore = $request->session()->get('total_score', 0) + $score;

        return redirect()->route('test.results.show')->with([
            'page3_score' => $score,
            'final_score' => $finalScore
        ]);
    }
}