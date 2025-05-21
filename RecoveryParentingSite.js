import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RecoveryParentingSite() {
  const [quizStep, setQuizStep] = useState(0);
  const [scores, setScores] = useState({ authoritative: 0, authoritarian: 0, permissive: 0, neglectful: 0 });

  const questions = [
    {
      q: "When your child breaks a rule, how do you usually respond?",
      options: [
        { text: "Explain why it's wrong and discuss consequences", style: "authoritative" },
        { text: "Punish immediately without discussion", style: "authoritarian" },
        { text: "Let it slide most of the time", style: "permissive" },
        { text: "I'm often too tired to respond", style: "neglectful" }
      ]
    },
    {
      q: "How often do you set and enforce consistent rules?",
      options: [
        { text: "Always, with flexibility and warmth", style: "authoritative" },
        { text: "Always, without exception", style: "authoritarian" },
        { text: "Rarely, I avoid conflict", style: "permissive" },
        { text: "Rarely, I forget or don't have energy", style: "neglectful" }
      ]
    }
  ];

  const handleOption = (style) => {
    setScores(prev => ({ ...prev, [style]: prev[style] + 1 }));
    setQuizStep(prev => prev + 1);
  };

  const getResult = () => {
    const max = Math.max(...Object.values(scores));
    return Object.keys(scores).find(key => scores[key] === max);
  };

  const renderQuiz = () => {
    if (quizStep >= questions.length) {
      const result = getResult();
      const descriptions = {
        authoritative: "You are likely an Authoritative parent: warm, responsive, and consistent. This is considered one of the most effective parenting styles.",
        authoritarian: "You lean toward Authoritarian: structured and rule-focused, but may benefit from more emotional connection.",
        permissive: "You may be a Permissive parent: loving and flexible, but could strengthen boundaries and consistency.",
        neglectful: "You may be experiencing signs of Neglectful parenting—likely due to emotional fatigue. Recovery support and self-care can help immensely."
      };
      return (
        <div>
          <h3 className="text-xl font-semibold">Your Parenting Style Result</h3>
          <p className="mt-2">{descriptions[result]}</p>
        </div>
      );
    }
    const current = questions[quizStep];
    return (
      <div>
        <h3 className="text-lg font-semibold mb-2">{current.q}</h3>
        {current.options.map((opt, idx) => (
          <Button key={idx} className="block my-1 w-full" onClick={() => handleOption(opt.style)}>{opt.text}</Button>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Mothers in Recovery</h1>
        <p className="text-lg text-gray-600">Support, tools, and growth for parents in healing</p>
      </header>

      <Tabs defaultValue="activities" className="space-y-4">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
          <TabsTrigger value="activities">Child Activities</TabsTrigger>
          <TabsTrigger value="styles">Parenting Styles</TabsTrigger>
          <TabsTrigger value="quiz">Parenting Quiz</TabsTrigger>
          <TabsTrigger value="worksheets">Worksheets</TabsTrigger>
          <TabsTrigger value="selfcare">Self-Care</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="activities">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-2">Activities for Children Under 15</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Mindful coloring and journaling for ages 5-10</li>
                <li>Outdoor scavenger hunts and nature walks</li>
                <li>Cooking and simple meal prep for teens</li>
                <li>Yoga or movement games for all ages</li>
                <li>Storytelling prompts to build emotional intelligence</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="styles">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-2xl font-semibold">Parenting Styles Explained</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Authoritative:</strong> High warmth and firm rules. Encourages independence, nurtures emotional health. Ideal in recovery due to its balance of structure and empathy.</li>
                <li><strong>Authoritarian:</strong> Low warmth, strict discipline. Often used by parents raised in rigid households. Can be harsh but provides clear boundaries.</li>
                <li><strong>Permissive:</strong> High warmth, minimal rules. Often chosen by parents who want to avoid conflict or overcompensate for their own upbringing.</li>
                <li><strong>Neglectful:</strong> Disconnected from both emotional and behavioral needs. Often a result of untreated trauma, depression, or overwhelming stress in recovery.</li>
              </ul>
              <p className="text-sm text-gray-600">Understanding your style can help improve communication and connection with your children.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quiz">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-2">What Parenting Style Are You?</h2>
              {renderQuiz()}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="worksheets">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-2xl font-semibold">Parenting Worksheets</h2>
              <ul className="list-disc list-inside">
                <li><a href="#" className="text-blue-600">Positive Parenting Worksheet (PDF)</a></li>
                <li><a href="#" className="text-blue-600">Authoritative Style Guide</a></li>
                <li><a href="#" className="text-blue-600">Self-Awareness Journal Prompts</a></li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="selfcare">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-2">Self-Care for Mothers in Recovery</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Daily grounding techniques (breathing, meditation)</li>
                <li>Weekly check-ins with recovery sponsors or peers</li>
                <li>Creative outlets: art, music, writing</li>
                <li>Gentle movement: walks, yoga, stretching</li>
                <li>Sleep hygiene tips and bedtime routines</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-2xl font-semibold">Helpful Resources</h2>
              <ul className="list-disc list-inside">
                <li><a href="https://www.samhsa.gov/" className="text-blue-600" target="_blank">SAMHSA (Mental Health & Recovery)</a></li>
                <li><a href="https://www.na.org/" className="text-blue-600" target="_blank">Narcotics Anonymous</a></li>
                <li><a href="https://www.zerotothree.org/" className="text-blue-600" target="_blank">Zero to Three (Parenting Young Children)</a></li>
                <li><a href="https://www.psychologytoday.com/" className="text-blue-600" target="_blank">Psychology Today (Therapist Finder)</a></li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
