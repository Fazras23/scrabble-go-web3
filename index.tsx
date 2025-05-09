import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ScrabbleGoWeb3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-6">Scrabble GO Web3 Upgrade</h1>

        <Card className="mb-6 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Welcome, Legacy Players!</h2>
            <p className="text-gray-700">
              Scrabble GO is now powered by blockchain technology! Earn tokens, collect NFT word tiles, and buy real shares in the game you love.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">How You’re Involved</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Earn <strong>SGB Tokens</strong> through gameplay</li>
              <li>Collect exclusive <strong>Word Tile NFTs</strong></li>
              <li>Join our <strong>Legacy Share Program</strong> to buy Scrabble GO shares</li>
              <li>Vote on updates via our Player DAO</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-red-700 mb-3">How to Get Started</h2>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Send an email to <strong>support@scrabblego.com</strong></li>
              <li>Use subject line: <em>“Legacy Share Interest – [Your Username]”</em></li>
              <li>Wait for a confirmation and setup link</li>
            </ol>
            <p className="mt-4">Our team will guide you step by step from wallet creation to buying your first shares!</p>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Button className="text-white bg-green-700 hover:bg-green-800 rounded-full px-6 py-3 text-lg">
            Join the Future of Scrabble GO
          </Button>
        </div>
      </div>
    </div>
  );
}