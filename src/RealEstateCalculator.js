import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './src/components/ui/card';
import { Input } from './src/components/ui/input';
import { Button } from './src/components/ui/button';
// import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';

// Function to format number in Indian Rupee style
const formatIndianRupee = (num) => {
  const lakhs = 100000;
  const crores = 10000000;
  if (num >= crores) {
    return (num / crores).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " Cr";
  } else if (num >= lakhs) {
    return (num / lakhs).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " L";
  } else {
    return num.toLocaleString('en-IN');
  }
};

const RealEstateCalculator = () => {
  const [inputs, setInputs] = useState({
    plotArea: 625,
    plotRate: 0,
    constructionCost: 1200,
    officeRent: 72000,
    officeExtra: 12000,
    officeTravel: 60000,
    softwareCost: 120000,
    toolsRental: 230500,
    promotionCost: 150000,
    ownerSalary: 300000,
    brokerageFees: 50000,
    legalAdminCost: 80000,
    contingencyPercent: 5,
    profitPercent: 0
  });

  const [outputs, setOutputs] = useState({
    initialCost: 0,
    legalAdminCost: 0,
    officeSetupCost: 0,
    operationCost: 0,
    totalStartupAmount: 0,
    contingencyFund: 0,
    profitAmount: 0,
    revenueNeeded: 0,
    villaCount: 0,
    shopCount: 0,
    villaPrice: 0,
    shopPrice: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: Math.max(Number(value), getMinValue(name))
    }));
  };

  const getMinValue = (name) => {
    const minValues = {
      plotArea: 625,
      constructionCost: 1200,
      officeRent: 72000,
      officeExtra: 12000,
      officeTravel: 60000,
      softwareCost: 120000,
      toolsRental: 230500,
      promotionCost: 150000,
      ownerSalary: 300000,
      brokerageFees: 50000,
      legalAdminCost: 80000,
      contingencyPercent: 5
    };
    return minValues[name] || 0;
  };

  useEffect(() => {
    calculateOutputs();
  }, [inputs]);

  const calculateOutputs = () => {
    const landCost = (inputs.plotArea / 9) * inputs.plotRate;
    const constructionCost = inputs.plotArea * inputs.constructionCost;
    const initialCost = landCost + constructionCost;
    const officeSetupCost = inputs.officeRent + inputs.officeExtra + inputs.officeTravel + inputs.softwareCost;
    const operationCost = inputs.toolsRental + inputs.promotionCost + inputs.ownerSalary + inputs.brokerageFees;
    const totalStartupAmount = initialCost + inputs.legalAdminCost + officeSetupCost + operationCost;
    const contingencyFund = totalStartupAmount * (inputs.contingencyPercent / 100);
    const profitAmount = totalStartupAmount * (inputs.profitPercent / 100);
    const revenueNeeded = totalStartupAmount + contingencyFund + profitAmount;

    const villaArea = 625;
    const shopArea = 150;
    const villaCount = Math.floor(inputs.plotArea / villaArea);
    const remainingArea = inputs.plotArea % villaArea;
    const shopCount = Math.floor(remainingArea / shopArea);

    const totalUnits = villaCount + shopCount;
    const villaPrice = Math.ceil(revenueNeeded / (totalUnits * 1.5));
    const shopPrice = Math.floor(villaPrice / 3);

    setOutputs({
      initialCost,
      legalAdminCost: inputs.legalAdminCost,
      officeSetupCost,
      operationCost,
      totalStartupAmount,
      contingencyFund,
      profitAmount,
      revenueNeeded,
      villaCount,
      shopCount,
      villaPrice,
      shopPrice
    });
  };

  return (
    <div className="App p-4 max-w-6xl mx-auto">
      <div className="header">
        <h1 className="text-2xl font-bold">Real Estate Project Calculator</h1>
      </div>

      <div className="input-grid">
        <div className="input-section">
          {Object.entries(inputs).slice(0, 7).map(([key, value]) => (
            <div key={key} className="input-group">
              <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
              <Input
                id={key}
                type="number"
                name={key}
                value={value}
                onChange={handleInputChange}
                placeholder={key.replace(/([A-Z])/g, ' ').replace(/^./, str => str.toUpperCase())}
              />
            </div>
          ))}
        </div>
        <div className="input-section">
          {Object.entries(inputs).slice(7).map(([key, value]) => (
            <div key={key} className="input-group">
              <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
              <Input
                id={key}
                type="number"
                name={key}
                value={value}
                onChange={handleInputChange}
                placeholder={key.replace(/([A-Z])/g, ' ').replace(/^./, str => str.toUpperCase())}
              />
            </div>
          ))}
        </div>
      </div>

      <Button onClick={calculateOutputs} className="calculate-button mb-6">
        Calculate
      </Button>

      <div className="results-section">
        <div className="results-grid">
          {Object.entries(outputs).map(([key, value]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {typeof value === 'number' ? `₹${formatIndianRupee(value)}/-` : value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="footer">
          <p>&copy; 2024 Real Estate Calculator. Developer - Mohammd Shakir. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default RealEstateCalculator;
