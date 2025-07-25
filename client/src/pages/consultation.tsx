import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { ArrowLeft, Check, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

const SuccessMessage = ({ consultationData }: { consultationData: any }) => (
  <div className="text-center space-y-6">
    <div className="bg-green-100 border-2 border-green-300 rounded-xl p-8">
      <div className="text-green-600 text-6xl mb-4">✓</div>
      <h3 className="text-2xl font-bold text-green-800 mb-4">Consultation Scheduled!</h3>
      <p className="text-green-700 mb-4">
        Thank you for booking your {consultationData.consultationType} consultation with Sarah BestWorth.
      </p>
      <div className="bg-white rounded-lg p-4 mb-4">
        <h4 className="font-semibold text-navy mb-2">What's Next?</h4>
        <div className="space-y-2 text-left">
          <div className="flex items-center">
            <Clock className="w-4 h-4 text-gold mr-2" />
            <span className="text-gray-700">We'll contact you within 24 hours</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-gold mr-2" />
            <span className="text-gray-700">To schedule your preferred appointment time</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        A confirmation email will be sent to {consultationData.email}
      </p>
    </div>
    <Link href="/">
      <Button className="bg-navy text-white hover:bg-gray-800">
        Return to Home
      </Button>
    </Link>
  </div>
);

export default function Consultation() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "",
    amount: "",
  });

  const consultationMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/consultation", data),
    onSuccess: (response) => {
      response.json().then((data) => {
        toast({
          title: "Success!",
          description: data.message,
        });
        setStep(2);
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    },
  });

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    consultationMutation.mutate(formData);
  };

  const selectConsultationType = (type: string, amount: string) => {
    setFormData(prev => ({ ...prev, consultationType: type, amount }));
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-light-gray pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Book Your Legal Consultation
          </h1>
          <p className="text-xl text-gray-600">
            Schedule a professional consultation with Sarah BestWorth
          </p>
        </div>

        {/* Step 1: Select Consultation Type */}
        {step === 1 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-navy">Choose Your Consultation Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  formData.consultationType === 'initial' ? 'ring-2 ring-gold' : ''
                }`}
                onClick={() => selectConsultationType('initial', '200')}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-navy">Initial Consultation</CardTitle>
                  <div className="text-3xl font-bold text-gold">$200</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">60-minute comprehensive review</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-gold mr-2" />
                      Case evaluation and analysis
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-gold mr-2" />
                      Strategic planning discussion
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-gold mr-2" />
                      Next steps recommendations
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-gold mr-2" />
                      Follow-up summary email
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card 
                className={`cursor-pointer transition-all hover:shadow-lg border-2 border-navy ${
                  formData.consultationType === 'extended' ? 'ring-2 ring-gold' : ''
                }`}
                onClick={() => selectConsultationType('extended', '350')}
              >
                <CardHeader>
                  <div className="bg-navy text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                    MOST POPULAR
                  </div>
                  <CardTitle className="text-xl text-navy">Extended Consultation</CardTitle>
                  <div className="text-3xl font-bold text-gold">$350</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">90-minute deep-dive consultation</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-gold mr-2" />
                      Everything in Initial Consultation
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-gold mr-2" />
                      Document review and analysis
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-gold mr-2" />
                      Detailed action plan creation
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-gold mr-2" />
                      7-day follow-up call included
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {formData.consultationType && (
              <Card>
                <CardHeader>
                  <CardTitle>Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleConsultationSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={consultationMutation.isPending}
                      className="bg-gold hover:bg-deep-gold text-navy py-3 px-8 font-semibold"
                    >
                      {consultationMutation.isPending ? "Processing..." : "Continue to Payment"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Step 2: Success Message */}
        {step === 2 && (
          <SuccessMessage consultationData={formData} />
        )}
      </div>
    </div>
  );
}
