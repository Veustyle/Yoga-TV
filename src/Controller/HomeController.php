<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home.home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'title' => 'Home',
        ]);
    }

   #[Route('/search', name: 'home.search')]
   public function search (): Response
   {
      return $this->render('home/search.html.twig', [
         'title' => 'Search',
      ]);
   }

   #[Route('/todolist', name: 'home.todolist')]
   public function todolist (): Response
   {
      return $this->render('home/todolist.html.twig', [
         'title' => 'Todolist',
      ]);
   }
}
