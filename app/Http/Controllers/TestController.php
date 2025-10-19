<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    private $correctAnswersPage1 = [
        'q1' => 'a', 'q2' => 'a', 'q3' => 'a', 'q4' => 'a', 'q5' => 'a',
        'q6' => 'a', 'q7' => 'a', 'q8' => 'a', 'q9' => 'a', 'q10' => 'a'
    ];

    private $correctAnswersPage2 = [
        'q1' => 'a', 'q2' => 'c', 'q3' => 'a', 'q4' => 'a', 'q5' => 'a',
        'q6' => 'a', 'q7' => 'a', 'q8' => 'a', 'q9' => 'c', 'q10' => 'a'
    ];

    private $correctAnswersPage3 = [
        'q1' => 'a', 'q2' => 'a', 'q3' => 'a', 'q4' => 'a', 'q5' => 'c',
        'q6' => 'a', 'q7' => 'a', 'q8' => 'a', 'q9' => 'c', 'q10' => 'a'
    ];

    public function storePage1(Request $request)
    {
        $userAnswers = $request->only(['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10']);
        $score = $this->calculateScore($userAnswers, $this->correctAnswersPage1, 1);

        $request->session()->put('page1_score', $score);

        return redirect()->route('test.page2.show');
    }

    public function storePage2(Request $request)
    {
        $userAnswers = $request->only(['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10']);
        $page1Score = $request->session()->get('page1_score', 0);
        $page2Score = $this->calculateScore($userAnswers, $this->correctAnswersPage2, 3);
        $totalScore = $page1Score + $page2Score;

        $request->session()->put('page2_score', $page2Score);
        $request->session()->put('total_score', $totalScore);

        return redirect()->route('test.page3.show');
    }

    public function storePage3(Request $request)
    {
        $userAnswers = $request->only(['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10']);
        $totalScore = $request->session()->get('total_score', 0);
        $page3Score = $this->calculateScore($userAnswers, $this->correctAnswersPage3, 5);
        $finalScore = $totalScore + $page3Score;

        $request->session()->put('page3_score', $page3Score);
        $request->session()->put('final_score', $finalScore);

        return redirect()->route('test.results.show');
    }

    private function calculateScore($userAnswers, $correctAnswers, $pointsPerAnswer)
    {
        $score = 0;
        
        foreach ($userAnswers as $question => $answer) {
            if (isset($correctAnswers[$question]) && $correctAnswers[$question] === $answer) {
                $score += $pointsPerAnswer;
            }
        }
        
        return $score;
    }
}