import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FaArrowLeft } from 'react-icons/fa';

const Step3Report = ({ report }) => {

  const navigate = useNavigate();
  console.log(report);

  if(!report){
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-gray-500 text-lg'>
          Loading Report...
          {report}
        </p>
      </div>
    )
  }

  const {
    finalScore = 0,
    confidence = 0,
    communication = 0,
    correctness = 0,
    questionWiseScore = [],
  } = report;

  const questionScoreData = questionWiseScore.map((score, index) => ({
    name: `Q${index+1}`,
    score: score.score || 0,
  }));

  const skills = [
    { label: "Confidence", value: confidence },
    { label: "Communication", value: communication },
    { label: "Correctness", value: correctness },
  ];

  let performanceText = "";
  let shortTagline = "";

  if(finalScore >= 8){
    performanceText = "Ready for job opportunities.";
    shortTagline = "Excellent clarity and structured responses.";
  }
  else if(finalScore >= 5){
    performanceText = "Needs minor improvement before interviews.";
    shortTagline = "Good foundation, refine articulation.";
  }
  else{
    performanceText = "Significant improvement required.";
    shortTagline = "Work on clarity and confidence.";
  }

  const score = finalScore;
  const percentage = (score / 10) * 100;

  const downloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");
  
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
  
    const margin = 15;
    const contentWidth = pageWidth - margin * 2;
  
    let currentY = 20;
  
    // HEADER
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(22, 163, 74);
  
    doc.text(
      "AI Interview Performance Report",
      pageWidth / 2,
      currentY,
      { align: "center" }
    );
  
    currentY += 8;
  
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100);
  
    doc.text(
      `Generated: ${new Date().toLocaleDateString()}`,
      pageWidth / 2,
      currentY,
      { align: "center" }
    );
  
    currentY += 8;
  
    doc.setDrawColor(22, 163, 74);
    doc.setLineWidth(0.5);
    doc.line(margin, currentY, pageWidth - margin, currentY);
  
    currentY += 12;
  
    // OVERALL RATING
    let rating = "";
    let ratingColor = [22, 163, 74];
  
    if (finalScore >= 8) {
      rating = "Excellent";
      ratingColor = [22, 163, 74];
    } else if (finalScore >= 6) {
      rating = "Good";
      ratingColor = [59, 130, 246];
    } else if (finalScore >= 4) {
      rating = "Average";
      ratingColor = [245, 158, 11];
    } else {
      rating = "Needs Improvement";
      ratingColor = [239, 68, 68];
    }
  
    doc.setFillColor(...ratingColor);
    doc.roundedRect(margin, currentY, contentWidth, 18, 3, 3, "F");
  
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(255);
  
    doc.text(
      `Overall Rating: ${rating}`,
      pageWidth / 2,
      currentY + 12,
      { align: "center" }
    );
  
    currentY += 28;
  
    // FINAL SCORE
    doc.setFillColor(240, 253, 244);
    doc.roundedRect(margin, currentY, contentWidth, 22, 3, 3, "F");
  
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0);
    doc.setFontSize(16);
  
    doc.text(
      `Final Interview Score: ${finalScore}/10`,
      pageWidth / 2,
      currentY + 14,
      { align: "center" }
    );
  
    currentY += 35;
  
    // SCORE CARDS
    const cards = [
      {
        title: "Confidence",
        value: confidence,
        color: [59, 130, 246],
      },
      {
        title: "Communication",
        value: communication,
        color: [34, 197, 94],
      },
      {
        title: "Correctness",
        value: correctness,
        color: [168, 85, 247],
      },
    ];
    
    const cardWidth = 55;
    const cardHeight = 38;
    const gap = 7;
    
    cards.forEach((card, index) => {
      const x = margin + index * (cardWidth + gap);
    
      // Shadow
      doc.setFillColor(235, 235, 235);
      doc.roundedRect(
        x + 1,
        currentY + 1,
        cardWidth,
        cardHeight,
        4,
        4,
        "F"
      );
    
      // Card
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(
        x,
        currentY,
        cardWidth,
        cardHeight,
        4,
        4,
        "F"
      );
    
      // Border
      doc.setDrawColor(225, 225, 225);
      doc.roundedRect(
        x,
        currentY,
        cardWidth,
        cardHeight,
        4,
        4
      );
    
      // Accent line
      doc.setFillColor(...card.color);
      doc.roundedRect(
        x,
        currentY,
        cardWidth,
        4,
        4,
        4,
        "F"
      );
    
      // Title
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(100);
    
      doc.text(
        card.title,
        x + cardWidth / 2,
        currentY + 15,
        { align: "center" }
      );
    
      // Score
      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.setTextColor(...card.color);
    
      doc.text(
        `${card.value}`,
        x + cardWidth / 2,
        currentY + 29,
        { align: "center" }
      );
    
      // /10
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(140);
    
      doc.text(
        "/10",
        x + cardWidth / 2,
        currentY + 35,
        { align: "center" }
      );
    });
    
    currentY += 50;
  
    // EXECUTIVE SUMMARY
    let summary = "";
  
    if (finalScore >= 8) {
      summary =
        "The candidate demonstrated strong communication skills, technical understanding, and confidence throughout the interview. Responses were clear, relevant, and well-structured.";
    } else if (finalScore >= 5) {
      summary =
        "The candidate showed a reasonable understanding of the concepts discussed. Further improvement in response structure, depth, and confidence would strengthen future interview performance.";
    } else {
      summary =
        "The candidate requires additional preparation and practice. Focus should be placed on communication clarity, technical depth, and structured problem explanation.";
    }
  
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(40);
  
    doc.text("Executive Summary", margin, currentY);
  
    currentY += 8;
  
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
  
    const summaryLines = doc.splitTextToSize(
      summary,
      contentWidth
    );
  
    doc.text(summaryLines, margin, currentY);
  
    currentY += summaryLines.length * 6 + 12;
  
    // PROFESSIONAL ADVICE
    let advice = "";
  
    if (finalScore >= 8) {
      advice =
        "Excellent performance. Continue refining communication and supporting answers with practical examples and measurable achievements.";
    } else if (finalScore >= 5) {
      advice =
        "Build stronger answer structures using real-world examples. Focus on concise communication and confidence during technical discussions.";
    } else {
      advice =
        "Practice mock interviews regularly. Focus on communication, confidence, and explaining technical concepts in a structured and understandable manner.";
    }
  
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(margin, currentY, contentWidth, 35, 3, 3, "F");
  
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
  
    doc.text(
      "Professional Recommendation",
      margin + 8,
      currentY + 10
    );
  
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
  
    const adviceLines = doc.splitTextToSize(
      advice,
      contentWidth - 15
    );
  
    doc.text(
      adviceLines,
      margin + 8,
      currentY + 20
    );
  
    currentY += 48;
  
    // QUESTION ANALYSIS TABLE
    autoTable(doc, {
      startY: currentY,
  
      head: [
        [
          "#",
          "Question",
          "Score",
          "Feedback"
        ]
      ],
  
      body: questionWiseScore.map((q, i) => [
        i + 1,
        q.question,
        `${q.score}/10`,
        q.feedback,
      ]),
  
      margin: {
        left: margin,
        right: margin,
      },
  
      styles: {
        fontSize: 9,
        cellPadding: 4,
        overflow: "linebreak",
        valign: "middle",
      },
  
      headStyles: {
        fillColor: [22, 163, 74],
        textColor: [255, 255, 255],
        halign: "center",
        fontStyle: "bold",
      },
  
      alternateRowStyles: {
        fillColor: [248, 250, 252],
      },
  
      columnStyles: {
        0: {
          cellWidth: 10,
          halign: "center",
        },
        1: {
          cellWidth: 70,
        },
        2: {
          cellWidth: 18,
          halign: "center",
        },
        3: {
          cellWidth: "auto",
        },
      },
    });
  
    // FOOTER
    const totalPages = doc.getNumberOfPages();
  
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
  
      doc.setFontSize(9);
      doc.setTextColor(120);
  
      doc.text(
        `AI Interview Analytics Report | Page ${i} of ${totalPages}`,
        pageWidth / 2,
        pageHeight - 8,
        { align: "center" }
      );
    }
  
    doc.save("AI_Interview_Report.pdf");
  };

  return (
    <div className='min-h-screen bg-linear-to-br from-gray-50 to-green-50 px-4 sm:px-6 lg:px-10 py-8'>
      <div className='mb-8 flex flex-col sm:flex-row sm:justify-center items-start'>
        <div className='md:mb-10 mb-2 w-full flex items-start gap-4 flex-wrap'>
          <button onClick={() => navigate("/history")}
            className='mt-1 p-3 rounded-full bg-white shadow hover:shadow-md transition'>
              <FaArrowLeft className='text-gray-600' />
          </button>

          <div>
            <h1 className='text-3xl font-bold flex-nowrap text-gray-800'>
              Interview Analytics Dashboard
            </h1>
            <p className='text-gray-500 mt-2'>
              AI Powered performance insights
            </p>
          </div>
        </div>

        <button onClick={downloadPDF} className='bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-xl shadow-md transition-all duration-300 font-semibold text-sm sm:text-base text-nowrap ml-auto'>
          Download PDF
        </button>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
        <div className='space-y-6'>
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 text-center'
          >
            <h3 className='text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base'>
              Overall Performance
            </h3>
            <div className='relative w-20 h-20 sm:w-25 sm:h-25 mx-auto'>
              <CircularProgressbar
              value={percentage}
              text={`${score}/10`}
              styles={buildStyles({
                  textSize: "18px",
                  pathColor: "#10b981",
                  textColor: "#ef4444",
                  trailColor: "#e5e7eb"
              })}
              />
            </div>

            <p className='text-gray-400 mt-3 text-xs sm:text-sm'>
              Out of 10
            </p>
            <div className='mt-4'>
              <p className='font-semibold text-gray-800 text-sm sm:text-base'>
                {performanceText}
              </p>
              <p className='text-gray-500 text-xs sm:text-sm mt-1'>
                {shortTagline}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8'
          >
            <h3 className='text-base sm:text-lg font-semibold text-gray-700 mb-6'>
              Skill Evaluation
            </h3>

            <div className='space-y-5'>
              {
                skills.map((s, i) => (
                  <div key={i}>
                    <div className='flex justify-between mb-2 text-sm sm:text-base'>
                      <span>{s.label}</span>
                      <span className='font-semibold text-green-600'>
                        {s.value}
                      </span>
                    </div>

                    <div className='bg-gray-200 h-2 sm:h-3 rounded-full'>
                      <div className='bg-green-500 h-full rounded-full' style={{ width: `${s.value * 10}%`}}>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </motion.div>

        </div>
        <div className='lg:col-span-2 space-y-6'>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8'
          >
            <h3 className='text-base sm:text-lg font-semibold text-gray-700 mb-4 sm:mb-6'>
              Performance Trend
            </h3>

            <div className='h-64 sm:h-72'>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={questionScoreData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Area type="monotone"
                  dataKey="score"
                  stroke="#22c55e"
                  fill="#bbf7d0"
                  strokeWidth={3}
                />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8'
          >
            <h3 className='text-base sm:text-lg font-semibold text-gray-700 mb-4 sm:mb-6'>
              Question Breakdown
            </h3>
            <div className='space-y-6'>
              {questionWiseScore.map((q, i) => (
                <div key={i} className='bg-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200'>
                  <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4'>
                    <div>
                      <p className='text-xs text-gray-400'>
                        Question {i + 1}
                      </p>
                      <p className='font-semibold text-gray-800 text-sm sm:text-base leading-relaxed'>
                        {q.question || "Question not available"}
                      </p>
                    </div>
                    <div className='bg-green-100 text-green-600 px-3 py-1 rounded-full font-bold text-xs sm:text-sm w-fit'>
                      {q.score ?? 0}/10
                    </div>
                  </div>

                  <div className='bg-gray-50 border border-green-200 p-4 rounded-lg'>
                    <p className='text-xs text-green-600 font-semibold mb-1'>
                      AI Feedback
                    </p>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                      {q.feedback && q.feedback.trim() !== "" ? q.feedback : "No feedback available for this question."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default Step3Report;
