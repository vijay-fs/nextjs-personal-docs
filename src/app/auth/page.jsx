// AuthTabs.js
"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import Login from "@/components/auth/login";
import Register from "@/components/auth/register";

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState("login");

  const switchToLogin = () => setActiveTab("login");

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full max-w-md mx-auto mt-20"
    >
      <TabsList className="flex justify-center">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Login />
      </TabsContent>
      <TabsContent value="register">
        <Register switchToLogin={switchToLogin} />
      </TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
